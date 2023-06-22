const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // const password = encodeURIComponent('Deepak#281828');
    await mongoose.connect(
      `mongodb+srv://Deepak:Deepak281828@cluster0.52dxe.mongodb.net/First_DataBase`
    );

    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Failed to connect to MongoDB Atlas', error);
  }
};

module.exports = connectDB;
