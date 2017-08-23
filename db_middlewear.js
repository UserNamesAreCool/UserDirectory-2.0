const MongoClient = require('mongodb').MongoClient;

function MongoDbMiddleWear(connection) {
    return (req, res, next) => {
        MongoClient.connect(connection.url, (err, db) => {
            if (err !== null) {
                res.send('Faild to get data') // Render error page on error
                return;
            }
            res.db = db;
            next();
        })
    }
}

module.exports = MongoDbMiddleWear;