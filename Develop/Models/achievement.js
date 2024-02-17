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
            model: 'users',
            key: 'user_id',
        }
    },
    trophy_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'trophies',
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

module.exports = Achievement;