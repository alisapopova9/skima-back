const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt =require('bcrypt');

const User = require('../models/user').User;

router.post('/signup', async (request, response, next) => {
    try {
        let user;
        await bcrypt.hash(request.body.password, 10, async (err, hash) => {
            if (err) {
                return response.status(500).json({
                    error: err,
                });
            } else {
                user = new User({
                    _id: new mongoose.Types.ObjectId(),
                    email: request.body.email,
                    password: hash,
                });
                const result = await user.save();
                response.status(201).json({
                    message: "Handling POST request to /users/signup",
                    createdUser: result,
                });
                console.log(result);
            }
        });
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;