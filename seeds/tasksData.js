const { Task } = require('../models/index');

const taskData = [
  {
    id: 1,
    task_name: 'Express.js',
    user_id: 1
  },
  {
    id: 2,
    task_name: ' Node.js',
    user_id: 1
  },
  {
    id: 3,
    task_name: 'RESTful API',
    user_id: 1
  },
  {
    id: 4,
    task_name: 'Handlebars.js',
    user_id: 2
  },
  {
    id: 5,
    task_name: 'MySQL',
    user_id: 3
  },
  {
    id: 6,
    task_name: 'Heroku ',
    user_id: 3
  },
  {
    id: 7,
    task_name: ' Charts.js',
    user_id: 4
  },
  {
    id: 8,
    task_name: 'UI/UX',
    user_id: 5
  },
  {
    id: 9,
    task_name: 'Responsiveness',
    user_id: 5
  },
  {
    id: 10,
    task_name: 'MVC',
    user_id: 3
  },
  {
    id: 11,
    task_name: 'Expres authentication',
    user_id: 4
  },
  {
    id: 12,
    task_name: 'Quality coding standards',
    user_id: 3
  },
  {
    id: 13,
    task_name: 'README',
    user_id: 3
  },
  {
    id: 14,
    task_name: 'Bootstrap',
    user_id: 2
  },
  {
    id: 15,
    task_name: 'CSS',
    user_id: 1
  },
];

const seedTask = () => Task.bulkCreate(taskData);

module.exports = seedTask;