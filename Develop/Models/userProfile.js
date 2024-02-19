const { Model , DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Import other Models
const User = require('./User');

class UserProfile extends Model{} 

UserProfile.init({
    profile_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users', // name of the Users table
          key: 'user_id'
        }
      },
      current_territory_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'territories', // name of the Territories table
          key: 'territory_id'
        }
      },
      current_challenge_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'challenges', // name of the Challenges table
          key: 'challenge_id'
        }
      },
      username: {
        type: DataTypes.STRING(50),
        allowNull: false
      }
    }, {
      sequelize,
      modelName: 'UserProfile',
      tableName: 'UserProfile',
      timestamps: false // Assuming you don't have createdAt and updatedAt fields
});


module.exports =  { UserProfile };


