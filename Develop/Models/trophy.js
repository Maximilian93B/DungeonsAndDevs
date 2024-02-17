// Import Modules 
const { Model , DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trophy extends Model {}

Trophy.init({

    trophy_id: {
        type: DataTypes.INTEGER,
        allowNull: false , 
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
        tpye: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'territories',
            key: 'territory_id',
        }

    }
},{
    // Model options 
    sequelize,
    modelName: 'Trophy',
    tableName: 'trophies',
    timestamps: false, 
    underscored: true,

});
Trophy.associate = (models) => {
    Trophy.hasMany(models.UserAchievement, { foreignKey: 'trophyId' }); // Use snake_case for foreign key
  }


module.exports = { Trophy }