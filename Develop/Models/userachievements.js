const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Achievement extends Model {}

Achievement.init(
  {
    achievement_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User', // Assuming your User model is named 'User'
        key: 'user_id'
      }
    },
    achievement_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    }
  },
  {
    sequelize,
    modelName: 'Achievement',
    tableName: 'achievements',
    timestamps: false
  }
);

module.exports = Achievement;