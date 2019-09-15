let MongoClient = require('mongodb').MongoClient;

let state = {
    db: null,
};

module.exports.connect = function (url, done) {
    if (state.db) {
        return done();
    }

    MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
        if (err) {
            return done(err);
        }
        state.db = client.db('skimaapi');
        done();
    })
};

module.exports.get = function () {
    return state.db;
};
