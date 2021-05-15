const sequelize = require('../config/connection');
const seedfinance = require('./financeData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedfinance();

  process.exit(0);
};

seedAll();
