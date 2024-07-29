const sequelize = require('../config/database');
const User = require('./User');
const Course = require('./course');
const Enrollment = require('./Enrollment');

User.hasMany(Course, { foreignKey: 'instructorId' });
Course.belongsTo(User, { foreignKey: 'instructorId' });

User.hasMany(Enrollment, { foreignKey: 'studentId' });
Enrollment.belongsTo(User, { foreignKey: 'studentId' });

Course.hasMany(Enrollment, { foreignKey: 'courseId' });
Enrollment.belongsTo(Course, { foreignKey: 'courseId' });

// Sync all models
sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});

module.exports = {
  User,
  Course,
  Enrollment,
};
