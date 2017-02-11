const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

module.exports.getDeposition = function(req, res, next) {
    MongoClient.connect('mongodb://localhost:27017/proven', function(error, db) {
        if (error) {
            res.status(400);
            res.json({"status": error});
        } else {
            const collection = db.collection('depositions');
            collection.find({"_id": new ObjectId(req.params.id)}).toArray(function(error, docs) {
                if (error) {
                    res.status(400);
                    res.json({"status": error});
                } else {
                    res.status(200);
                    res.json(docs);
                }
            });
        }
        db.close();
    });
};

module.exports.getDepositions = function(req, res, next) {
    MongoClient.connect('mongodb://localhost:27017/proven', function(error, db) {
        if (error) {
            res.status(400);
            res.json({"status": error});
        } else {
            const collection = db.collection('depositions');
            collection.find().toArray(function(error, docs) {
                if (error) {
                    res.status(400);
                    res.json({"status": error});
                } else {
                    res.status(200);
                    res.json(docs);
                }
            });
        }
        db.close();
    });
};
