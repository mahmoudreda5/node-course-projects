const { 
    MongoClient, 
    ObjectId 
} = require('mongodb');

const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// const _id = new ObjectId();
// console.log(_id.toHexString().length);
// console.log(_id.getTimestamp());

MongoClient.connect(
    connectionUrl, 
    { useNewUrlParser: true}, 
    (error, client) => {
        if(error) {
            return console.log('Unable to connect to database');
        }

        const db = client.db(databaseName);

        // delete
        // db.collection('users').deleteOne({
        //     _id: new ObjectId('60fdbddce340a132c1912f1f')
        // }).then((result) => {
        //     console.log(result);
        // }).catch((error) => {
        //     console.log(error);
        // });

        // uodate
        // db.collection('users').updateOne({
        //     _id: new ObjectId('60fdbddce340a132c1912f1f')
        // }, {
        //     $inc: {
        //         age: 1
        //     }
        // })
        // .then((result) => {
        //     console.log(result);
        // }).catch((error) => {
        //     console.log(error);
        // });

        // read
        // db.collection('users').findOne({_id: new ObjectId('60fdbddce340a132c1912f1f')}, (error, user) => {
        //     if(error) {
        //         return console.log('unable to fetch');
        //     }

        //     console.log(user);
        // });

        // db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
        //     console.log(tasks);
        // });

        // create
        // db.collection('users').insertOne({
        //     _id,
        //     name: 'wla wla',
        //     age: 26
        // }, (error, result) => {
        //     if(error) {
        //         return console.log('Unable to insert user');
        //     }

        //     return console.log(result);
        // });
    }
);