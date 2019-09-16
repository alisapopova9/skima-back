let db = require('../db');
let ObjectID = require('mongodb').ObjectID;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MarathonSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
   title: String,
   description: String,
});

mongoose.model('Marathon', MarathonSchema);

module.exports.Marathon = mongoose.model('Marathon', MarathonSchema);

// module.exports.getAll = function(callback) {
//     db.get().collection('marathons').find().toArray(function (err, data) {
//         callback(err, data);
//     })
// };
//
// module.exports.findById = function(id, callback) {
//     db.get().collection('marathons').findOne({ _id: ObjectID(id) }, function (err, data) {
//         callback(err, data);
//     })
// };
//
// module.exports.create = function(marathon, callback) {
//     db.get().collection('marathons').insertOne(marathon, function(err, code) {
//         callback(err, code);
//     });
// };