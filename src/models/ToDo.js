const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const ToDo = sequelize.define('toDo', {
  task: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isCompleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
  //userIdId
});

module.exports = ToDo;

