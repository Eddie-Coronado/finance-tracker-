require('dotenv').config();
const Sequelize =  require('sequelize');
const plaid = require('plaid');

const client = new plaid.Client({
    clientID: process.env.PLAID_CLIENT_ID, 
    secret: process.env.PLAID_SECRET, 
    env: plaid.environments.sandbox,
});


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
module.exports = client;