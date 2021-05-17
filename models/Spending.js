const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Spending extends Model { }

Spending.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        bucket: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        timestamp: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        finance_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'finance',
              key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamp: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'spending',
    }
);

module.exports = Spending;
