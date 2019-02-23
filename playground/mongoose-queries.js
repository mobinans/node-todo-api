const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5c71a56b66250116d04e7baa';
var userId = '5c7054afc9eb8325b057b9a1';

// if(!ObjectID.isValid(id)){
//     return console.log('Invalid ID');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todos) => {
//     console.log('Todo', todos);
// });

// Todo.findById(id).then((todos) => {
//     if(!todos){
//         return console.log('Id not found..!!');
//     }
//     console.log('Todo by ID', todos);
// }).catch((e) => {
//     console.log(e);
// });

User.findById(userId).then((user) => {
    if(!user){
        return console.log('Unable to find user..');
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => {
    console.log(e);
});

