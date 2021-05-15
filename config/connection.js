require('dotenv').config();
const Sequelize =  require('sequelize');

const client = new plaid.Client(
    process.env.PLAID_CLIENT_ID, 
    process.env.PLAID_SECRET, 
    process.env.PLAID_PUBLIC_KEY,
    'sandbox');


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