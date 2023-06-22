const express = require('express');
const { findById } = require('../Models/Register');
const router = express.Router();
const Roles = require('../Models/Roles');

router.get('/roleinformation', async(req, res) => {
  try{
    
    const data =  await Roles.find({})
    res.json({ data:data });
  }catch{
    res.status(500).json({ error: 'Internal Server Error' });
  }

});


router.post('/addRoles', async (req, res) => {
    try {
      const { name } = req.body;
  
      // Create a new document using the User model
      const Users= new Roles({ name });
      console.log(Users,"use details is called")
  
      // Save the document to the "User" collection
      await Users.save();
  
      res.json({ message: 'User created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });



module.exports = router;
