//const MongoClient  = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();
console.log(obj.getTimestamp());

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect to mongodb server')
    }
    console.log('connected to mongoDB server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('59c1ef45dd07cc283c2e0c86')
    },{
        $set: {
            completed: true
        }
    },{
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });

    // db.close();
});