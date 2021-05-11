require('dotenv').config();
const Sequelize =  require('sequelize');

const sequelize = new Sequelize (
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3008,
    }
);

module.exports = sequelize;