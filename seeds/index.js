const sequelize = require('../config/connection');
const seedTask = require('./taskData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedTask();

  process.exit(0);
};

seedAll();

