// const MongoClient = require('mongodb').MongoClient;
//ES 6 -- object destructuring
var {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connect to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5c6f26ac8494e754813c45f7')}, 
    {$set: { completed: true }}, {returnOriginal: false})
    .then((result) => {
        console.log(result);
    });
    
    // client.close();
});
