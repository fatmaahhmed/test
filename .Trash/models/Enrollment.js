const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Course = require('./course');
const User = require('./User');

const Enrollment = sequelize.define('Enrollment', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  studentId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  courseId: {
    type: DataTypes.INTEGER,
    references: {
      model: Course,
      key: 'id'
    }
  },
  status: {
    type: DataTypes.ENUM('enrolled', 'completed', 'dropped'),
    allowNull: false
  },
  grade: {
    type: DataTypes.STRING(2),
    allowNull: true
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  }
}, {
  timestamps: false
});

module.exports = Enrollment;
