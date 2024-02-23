const sequelize = require("../config/connection");

module.exports = (sequelize, DataTypes) => { 
const { Model } = require('sequelize')

class UserTrophies extends Model {}

UserTrophies.init({

    profile_id: {
        type: DataTypes. INTEGER,
        allowNull: false, 
        references: {
            model: 'user_profile',
            key : 'profile_id'
        },
        primaryKey: true 
    },
    trophy_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'trophies',
            key: 'trophy_id'
        },
        primaryKey: true 
    },
    awarded_on: {
        type: DataTypes.DATE,
        allowNull: false, 
        defaultValue: DataTypes.NOW
    }
}, {
    // Model options 
    sequelize, 
    modelName: 'UserTrophies',
    tableName: 'user_trophies',
    timestamps: false ,
    underscored: true, 

});

UserTrophies.associate = (Model) => {
    
    UserTrophies.belongsTo(Model.UserProfile, { foreignKey: 'user_profile_id' });
    UserTrophies.belongsTo(Model.Trophy, { foreignKey: 'trophy_id' });
};

return UserTrophies;

};

