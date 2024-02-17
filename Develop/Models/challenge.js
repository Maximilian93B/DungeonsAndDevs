const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Challenge extends Model {}

Challenge.init ({
    // Model attributes 
    challenge_id: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        primaryKey:true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(50),
    },
    icon: {
        type: DataTypes.STRING(50), // Ensure this matches the Sequelize DataTypes
        allowNull: true, // Based on your requirements
      }
}, {
    // model options 
    sequelize, // pass connection 
    modelName: 'Challenge',
    tableName: 'challenges',
    timestamps: false,
    underscored: true,
});


module.exports = { Challenge }; 