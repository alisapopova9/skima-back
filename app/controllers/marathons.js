let Marathons = require('../models/marathons');

// module.exports.getAll = function(request, response) {
//     Marathons.getAll(function (err, data) {
//         if (err) {
//             console.log(err);
//             return response.sendStatus(500);
//         }
//         response.send(data);
//     })
// };
//
// module.exports.findById = function(request, response) {
//     Marathons.findById(request.params.id, function (err, data) {
//         if (err) {
//             console.log(err);
//             return response.sendStatus(500);
//         }
//         response.send(data);
//     })
// };
//
// module.exports.create = function(request, response) {
//     let marathon = {
//         title: request.body.title,
//         description: request.body.description,
//     };
//     Marathons.create(marathon, function(err, obj) {
//         if (err) {
//             console.log(err);
//             return response.sendStatus(500);
//         }
//         response.send(marathon);
//     })
// };