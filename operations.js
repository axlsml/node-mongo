const assert = require('assert');

exports.insertDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    coll.insertOne(document, (err, result) => {
        assert.equal(err, null);
        console.log(`inserted ${result.result.n} documents into collection`);
        callback(result);
    });
};
exports.findDocuments = (db, collection, callback) => {
    const coll = db.collection(collection);
    coll.find({}).toArray((err, docs) => {
        assert.equal(err, null);
        callback(docs);
    })
};
exports.removeDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    coll.deleteOne(document, (err, result) => {
        assert.equal(err, null);
        console.log(`removed the document ${document}`);
        callback(result);
    })
};
exports.updateDocument = (db, document, update, collection, callback) => {
    const coll = db.collection(collection);
    coll.updateOne(document, {$set: update}, null, (err, result) => {
        assert.equal(err, null);
        console.log(`updated the document with ${update}`);
        callback(result);
    });
};