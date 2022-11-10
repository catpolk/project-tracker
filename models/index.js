const Time = require('./Time');
const Tasks = require('./Tasks');
const Users = require('./Users');

Users.hasMany(Tasks, {
    foreignKey: 'user_id',
});





module.exports = { Time, Tasks, Users };