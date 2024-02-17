const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Territory extends Model {}

Territory.init ({
    // Model attributes 
    territory_id: {
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
    modelName: 'Territory',
    tableName: 'territories',
    timestamps: false,
    underscored: true,
});

Territory.associate = (models) => {
    Territory.hasMany(models.Provinces, { foreignKey: 'territoryId' }); // Use snake_case for foreign key
    Territory.hasMany(models.UserTerritories, { foreignKey: 'territoryId' }); // Use snake_case for foreign key
    Territory.hasMany(models.Trophy, { foreignKey: 'territoryId' }); // Use snake_case for foreign key
}


module.exports = { Territory }; 