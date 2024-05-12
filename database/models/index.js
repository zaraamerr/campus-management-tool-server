/*==================================================
/database/models/index.js

It registers models, sets up associations between tables, and generates barrel file for exporting the models.
==================================================*/
const Student  = require('./Student');  // Import Student model
const Campus  = require('./Campus');  // Import Campus model

// Student.belongsTo(Campus);  // Student belongs to only one Campus 
Student.belongsTo(Campus, { foreignKey: { allowNull: true } }); 
Campus.hasMany(Student);  // Campus can have many Student

// Export models and associations
module.exports = {
  Student,
  Campus
};