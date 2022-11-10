const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Task extends Model {}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // primaryKey: true,
      autoIncrement: true,
    },
    task_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    task_id: { 
      type: DataTypes.INTEGER,
      autoIncrement: true,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'task',
  }
);

module.exports = Task;