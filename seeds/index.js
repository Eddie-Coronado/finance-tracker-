const sequelize = require('../config/connection');
const seedFinance = require('./financeData');
const seedSpending = require('./spendingData');
// const Finance = require('../models/Finance');
// const Spending = require('../models/Spending');

// const financeData = require('./financeData')
// const spendingData = require('./spendingData')

const seedAll = async () => {
  await sequelize.sync({ force: true });

  // await Finance.bulkCreate(financeData, {
  //   individualHooks: true,
  //   returning: true,
  // });
  // await Spending.bulkCreate(spendingData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  await seedFinance();

  await seedSpending();

  process.exit(0);
};

seedAll();
