const User = require('./User');
const Task = require('./Task');

Task.hasMany(User, {
    foreignKey: 'task_id',
});

User.belongsTo(Task, {
    foreignKey: 'task_id',
});

module.exports = { User, Task };