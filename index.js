const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/conFusion';

MongoClient.connect(url, (err, db) => {
    assert.equal(err, null);

    console.log('connected successfully');

    const collection = db.collection('dishes');
    // collection.insertOne({name: 'Uthapizza', description: "test"});

    db.dropCollection("dishes");
    collection.find({}).toArray((err, docs) => {
        console.log(docs)
    });
});


