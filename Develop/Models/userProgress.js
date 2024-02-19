// Import Modules 
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserProgress extends Model {}

UserProgress.init({
    // user_progress Model attributes 
    progress_id:{
        types: DataTypes.INTEGER,
        allowNull:false,
        primaryKey: true,
        autoIncrement: true
    },
    user_id:{
        type: DataTypes.INTEGER,
        allowNull: false, 
        references: {
            model: 'users',// This is the table name not the Model name 
            key: 'user_id',
        }
    },
    challenge_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'challenges',
            key: 'challenge_id',
        }      
    },
    status:{
        type:DataTypes.STRING(50),
        allowNull: false
    },
    last_accessed: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'UserProgress',
    tableName: 'user_progress',
    timestamps: false,
    underscored: true,

});

UserProgress.associate = (models) => {
    UserProgress.belongsTo(models.User, { foreignKey: 'user_id' });
    UserProgress.belongsTo(models.Challenge, { foreignKey: 'challenge_id' });
};

module.exports = { UserProgress }