const Time = require('./Time');
const Tasks = require('./Tasks');
const Users = require('./Users');
const User = require('./Users');

Users.hasMany(Tasks);

Tasks.belongsTo(Users);





module.exports = { Time, Tasks, Users };