const mongoose = require('mongoose');

const RolesSchema = new mongoose.Schema({
  name : {
    type: String,
    enum: ['Admin', 'Salesmanager', 'DesignManager', 'CenterHead', 'ProcurmentManager']
  }
});

const Roles = mongoose.model('Roles', RolesSchema);

module.exports = Roles;
