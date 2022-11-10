const { Users } = require('../models/index');

const userinfoData = [
  {
    id: 1,
    username: 'adrian',
    email: 'ninobrown58518@gmail.com',
    password: '123456',
  },
  {
    id: 2,
    username: 'catherine',
    email: 'cpolknytx@gmail.com',
    password: '123456',
  },
  {
    id: 3,
    username: 'demetrius',
    email: 'demetriuscarter@gmail.com',
    password: '123456',
  },
  {
    id: 4,
    username: 'devante',
    email: 'devante_test@gmail.com',
    password: '123456',

  },
  {
    id: 5,
    username: 'justin',
    email: 'justinsnyder611@gmail.com',
    password: '123456',

  },
];

const seedUserInfo = () => Users.bulkCreate(userinfoData);

module.exports = seedUserInfo;    