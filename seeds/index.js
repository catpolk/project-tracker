const sequelize = require('../config/connection');
const seedTime = require('./timeData');
const seedTasks = require('./tasksData');
const seedUsers = require('./usersData');
const seedGallery = require('./galleryData');
const seedPaintings = require('./paintingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedTime();
  await seedUsers();
  await seedTasks();
  await seedGallery();
  await seedPaintings();

  process.exit(0);
};

seedAll();

