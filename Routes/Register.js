const express = require('express');
const router = express.Router();
const User = require('../Models/Register');


router.post('/users', async (req, res) => {
  try {
    const { name, email, password,roles } = req.body;

    // Create a new document using the User model
    const Users= new User({ name, email, password,roles });
    // Save the document to the "User" collection
    await Users.save();

    res.json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.get('/userInfo',async(req,res)=>{
  try{
    
    const username = await User.find({})
    .populate('roles','name')
    console.log(username,"username is called")
    res.status(200).json(username);
  }
  catch(err){
    res.status(500).json({ error: 'Internal Server Error' });
  }
})
router.post('/login', async (req, res) => {
  try {
    const { email } = req.body;
    console.log(req.body.email,"email is called")

    // Find the user with the provided email
    const user = await User.findOne({ email }).populate('roles', 'name');
    console.log(user,"user is called")

    // Check if the user exists
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    res.json({ message: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/assignRoles', async (req, res) => {
  console.log(req.body, "query is called");
  try {
    await User.findByIdAndUpdate(req.query.id, { $set: { roles: req.body.roles } }).lean();
    res.status(200).json({ message: 'Role assigned successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.get('/userRoles',async(req,res)=>{
  try{
    console.log("called")
    const username = await User.find({})
    .populate('roles','name')

    res.status(200).json(username);
  }
  catch(err){
    res.status(500).json({ error: 'Internal Server Error' });
  }
})


module.exports = router;
