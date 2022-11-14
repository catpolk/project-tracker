const Time = require('./Time');
const Task = require('./Task');
const User = require('./User');
const Message = require('./Message')
const Gallery = require('./Gallery');
const Painting = require('./Painting');

Gallery.hasMany(Painting, {
  foreignKey: 'gallery_id',
});

Painting.belongsTo(Gallery, {
  foreignKey: 'gallery_id',
});

User.hasMany(Task);

Task.belongsTo(User);





module.exports = { Time, Task, User, Message, Gallery, Painting };