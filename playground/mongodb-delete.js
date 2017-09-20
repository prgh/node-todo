//const MongoClient  = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();
console.log(obj.getTimestamp());

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect to mongodb server')
    }
    console.log('connected to mongoDB server');

    // db.collection('Todos').deleteMany({text: 'play soccer'}).then((result)=>{
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({text: 'play soccer'}).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Todos').findOneAndDelete({text: 'play soccer'}).then((result)=>{
        console.log(result);
    });

    // db.close();
});