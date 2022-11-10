const Time = require('./Time');
const Tasks = require('./Tasks');
const Users = require('./Users');

Tasks.hasMany(Users, {
    foreignKey: 'user_id',
});

Users.belongsTo(Tasks, {
    foreignKey: 'user_id',
});





module.exports = { Time, Tasks, Users };