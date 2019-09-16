const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: { type: String,
            required: true,
            unique: true,
            match: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/g },
    password: { type: String, required: true },
});

mongoose.model('User', UserSchema);

module.exports.User = mongoose.model('User', UserSchema);