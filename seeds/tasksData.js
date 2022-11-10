const { Tasks } = require('../models/index');

const taskData = [
  {
    id: 1,
    task_name: 'Express.js',
  },
  {
    id: 2,
    task_name: ' Node.js',
  },
  {
    id: 3,
    task_name: 'RESTful API',
  },
  {
    id: 4,
    task_name: 'Handlebars.js',
  },
  {
    id: 5,
    task_name: 'MySQL',
  },
  {
    id: 6,
    task_name: 'Heroku ',
  },
  {
    id: 7,
    task_name: ' Charts.js',
  },
  {
    id: 8,
    task_name: 'UI/UX',
  },
  {
    id: 9,
    task_name: 'Responsiveness',
  },
  {
    id: 10,
    task_name: 'MVC',
  },
  {
    id: 11,
    task_name: 'Expres authentication',
  },
  {
    id: 12,
    task_name: 'Quality coding standards',
  },
  {
    id: 13,
    task_name: 'README',
  },
  {
    id: 14,
    task_name: 'Bootstrap',
  },
  {
    id: 15,
    task_name: 'CSS',
  },
];

const seedTask = () => Tasks.bulkCreate(taskData);

module.exports = seedTask;