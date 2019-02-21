// const MongoClient = require('mongodb').MongoClient;
//ES 6 -- object destructuring
var {MongoClient, ObjectID} = require('mongodb');
// var obj = new ObjectID();
// console.log(obj);

//ES 6 -- object destructuring
// var user = {name: 'Mobin', age: 32}
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connect to MongoDB server');
    const db = client.db('TodoApp');

    /*
    db.collection('Todos').insertOne({
        text: 'Somthing todo',
        completed: false
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    */

    /*
    db.collection('Users').insertOne({
        name: 'Mobin Ansari',
        age: 32,
        location: 'Noida UP'
    }, (err, result)=>{
        if(err){
            return console.log('Unable to insert Users', err);
        }

        console.log(result.ops);
    });
    */

    client.close();
});