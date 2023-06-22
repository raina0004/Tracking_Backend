const mongoose = require('mongoose');

const ResourseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    mobileNo: {
      type: String,
    },
    email: {
      type: String,
    },
    address: {
      type: String,
    },
    alternateNumber: {
      type: String,
    },
    budget: {
      type: Number,
    },
    createdBy: {
      type: String,
    },
  },
  { timestamps: true }
);

const Resourse = mongoose.model('Resourse', ResourseSchema);

module.exports = Resourse;
