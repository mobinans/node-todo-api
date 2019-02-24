const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });


Todo.findByIdAndRemove('5c72ca77a63a1034c53af065').then((todo) => {
    console.log(todo);
});
