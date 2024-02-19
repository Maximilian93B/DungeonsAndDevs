const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Challenge extends Model {}

Challenge.init({
    // Model attributes
    challenge_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    province_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'provinces', // 
            key: 'province_id',
        }
    },
    type: {
        type: DataTypes.ENUM('quiz', 'coding'),
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    solution: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    // Model options
    sequelize,
    modelName: 'Challenge',
    tableName: 'challenges',
    timestamps: false,
    underscored: true,
});

Challenge.associate = (models) => {
    Challenge.belongsTo(models.Province, { foreignKey: 'province_id' });
    Challenge.hasMany(models.UserProgress, { foreignKey: 'challenge_id' });
};

module.exports = { Challenge };
