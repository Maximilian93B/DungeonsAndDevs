const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trophy extends Model {}

Trophy.init({
    trophy_id: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    image_url: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    territory_id: {
        type: DataTypes.INTEGER, // Corrected typo here from 'tpye' to 'type'
        allowNull: false,
        references: {
            model: 'territories', // Ensure this matches exactly the table name
            key: 'territory_id',
        }
    }
}, {
    sequelize,
    modelName: 'Trophy',
    tableName: 'trophies',
    timestamps: false,
    underscored: true,
});

/*
// Associations
Trophy.associate = (models) => {
    Trophy.belongsTo(models.Territory, { foreignKey: 'territory_id' });
    Trophy.hasMany(models.UserAchievements, { foreignKey: 'trophy_id' });
};

*/
module.exports = { Trophy };
