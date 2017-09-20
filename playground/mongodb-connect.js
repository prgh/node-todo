//const MongoClient  = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj.getTimestamp());

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err) {
        return console.log('unable to connect to mongodb server')
    }
    console.log('connected to mongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // },(err, result)=>{
    //     if(err){
    //         return console.log('unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined,2));

    // });

    // db.collection('Users').insertOne({
    //     name: 'robo',
    //     age: 99,
    //     location: 'mars'
    // },(err, result)=>{
    //     if(err){
    //         return console.log('unable to insert user' + err);
    //     }

    //     console.log(JSON.stringify(result.ops,undefined,2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});