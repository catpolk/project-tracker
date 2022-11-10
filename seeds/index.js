const sequelize = require('../config/connection');
const seedTime = require('./timeData');
const seedTasks = require('./tasksData');
const seedUsers = require('./usersData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedTime();
  await seedTasks();
  await seedUsers();

  process.exit(0);
};

seedAll();

