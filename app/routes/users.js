const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt =require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user').User;

router.post('/signup', async (request, response, next) => {
    try {
        const doc = await User.find({ email: request.body.email }).exec();
        if (doc.length >= 1) {
            return response.status(409).json({
                message: 'User with such email is already exists',
            })
        } else {
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
        }
    } catch (e) {
        console.log(e);
    }
});

router.post('/login', async (request, response, next) => {
    try {
        const doc = await User.find({ email: request.body.email }).exec();
        if (doc.length < 1) {
            return response.status(401).json({
                message: "Auth failed: user with such email doesn't exist"
            });
        }
        const match = await bcrypt.compare(request.body.password, doc[0].password);
        if (match) {
            const token =  jwt.sign({
                userId: doc[0]._id,
                email: doc[0].email,
            },
            process.env.JWT_KEY,
            {
                expiresIn: "1h",
            });
            return response.status(200).json({
                message: "Auth successful",
                token: token,
            })
        }
        else {
            return response.status(401).json({
                message: "Auth failed: wrong password",
            });
        }
    } catch (e) {
        response.status(500).json({
            error: e,
        })
    }
});

router.delete('/:userId', async (request, response, next) => {
   try {
       const result = await User.deleteOne({ _id: request.params.userId }).exec();
       response.status(200).json({
           message: 'User was successfully deleted',
       })
   } catch (e) {
       response.status(500).json({
           error: e,
       })
   }
});

module.exports = router;