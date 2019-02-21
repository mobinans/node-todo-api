// const MongoClient = require('mongodb').MongoClient;
//ES 6 -- object destructuring
var {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connect to MongoDB server');
    const db = client.db('TodoApp');
    
    //deleteMany
    db.collection('Todo').deleteMany({text: 'Eat lunch'}).then((result) => {
        console.log(`Total deleted items: ${result.n}`);
    });

    // client.close();
});
