const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove({_id: '5c72d752a63a1034c53af0ee' }).then((todo) => {
//     console.log(todo);
// });

Todo.findByIdAndRemove('5c72d752a63a1034c53af0ee').then((todo) => {
    console.log(todo);
});