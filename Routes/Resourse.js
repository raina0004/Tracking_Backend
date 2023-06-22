const express = require('express');
const router = express.Router();
const Resourse = require("../Models/Resourse")

router.post('/addDetails', async (req, res) => {
  const {createdBy} = req.query;
  console.log(createdBy,"by is calleds")
  try {
    console.log(req.body,"body is called")

    // Assuming you have user authentication implemented and the user is available in req.user
    const createdBy = req.user; // Get the unique identifier of the user who creates the lead

    const customerInfo = req.body;
    customerInfo.createdBy = createdBy; // Assign the user ID who creates the lead to the customerInfo object

    const info = new Resourse(customerInfo);
    await info.save();

    res.json({ message: 'Details saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


  router.get('/sendUserDetail',async(req,res)=>{
    try{
      const customers = await Resourse.find()
      res.json(customers);
    }
    catch(error){
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })

  module.exports = router;

