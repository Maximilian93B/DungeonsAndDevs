const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Achievement extends Model {}

Achievement.init({
    // Model attributes
    achievement_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
    trophy_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'trophies', // This should match the table name
            key: 'trophy_id',
        }
    },
    date_earned: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    // Model options
    sequelize,
    modelName: 'Achievement',
    tableName: 'user_achievements',
    timestamps: false
});

// Define associations here, outside the init method
Achievement.associate = (models) => {
    Achievement.belongsTo(models.User, { foreignKey: 'user_id' });
    Achievement.belongsTo(models.Trophies, { foreignKey: 'trophy_id' });
};

module.exports = { Achievement };
