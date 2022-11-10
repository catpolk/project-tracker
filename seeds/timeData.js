const { Time } = require('../models/index');

const times = [
  {
    id: 1,
    name: 'Adrian',
    starting_date: 'November 3, 2022 18:30:00',
    ending_date: 'November 16, 2022 19:30:00',
  },
  {
    id: 2,
    name: 'Catherine',
    starting_date: 'November 3, 2022 18:30:00',
    ending_date: 'November 16, 2022 19:30:00',
  },
  {
    id: 3,
    name: 'Demetrius',
    starting_date: 'November 3, 2022 18:30:00',
    ending_date: 'November 16, 2022 19:30:00',
  },
  {
    id: 4,
    name: 'Devante',
    starting_date: 'November 3, 2022 18:30:00',
    ending_date: 'November 16, 2022 19:30:00',
  },
  {
    id: 5,
    name: 'Justin',
    starting_date: 'December 22, 2020 18:30:00',
    ending_date: 'November 16, 2022 19:30:00',
  },
];

const seedTime = () => Time.bulkCreate(times);

module.exports = seedTime;