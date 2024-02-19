const { Model , DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class UserTerritory extends Model {}

    UserTerritory.init({
        user_territory_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users', // This should match the table name
                key: 'user_id',
            }
        },
        territory_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'territories', // This should match the table name
                key: 'territory_id',
            }
        },
        is_unlocked: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        sequelize,
        modelName: 'UserTerritory',
        tableName: 'user_territories',
        timestamps: false,
        underscored: true,
    });
    
    
    UserTerritory.associate = (models) => {
        UserTerritory.belongsTo(models.User, { foreignKey: 'user_id' });
        UserTerritory.belongsTo(models.Territory, { foreignKey: 'territory_id' });
    };
    
    module.exports = { UserTerritory } ;


      













