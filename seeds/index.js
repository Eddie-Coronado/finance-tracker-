const sequelize = require('../config/connection');
const seedfinance = require('./financeData');
const seedSpending = require('./SpendingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedfinance();

  await seedSpending();

  process.exit(0);
};

seedAll();
