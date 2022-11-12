const Time = require('./Time');
const Task = require('./Task');
const User = require('./User');
const Message = require('./Message')

User.hasMany(Task);

Task.belongsTo(User);





module.exports = { Time, Task, User, Message };