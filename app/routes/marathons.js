const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Marathon = require('../models/marathon').Marathon;

router.get('/', async (request, response, next) => {
    try {
        const docs = await Marathon.find().exec();
        response.status(200).json(docs);
    } catch (error) {
        response.status(500).json({ error: error });
    }
});

router.post('/', async (request, response, next) => {
    let marathon = new Marathon();
    marathon._id = new mongoose.Types.ObjectId();
    marathon.title = request.body.title;
    marathon.description = request.body.description;
    try {
        const result = await marathon.save();
        response.status(201).json({
            message: "Handling POST request to /marathons",
            createdMarathon: result,
        });
    } catch (e) {
        console.log(e);
    }
});

router.get("/:marathonId", async (request, response, next) => {
   const id = request.params.marathonId;
   try {
       const document = await Marathon.findById(id).exec();
       if (document) {
           response.status(200).json(document);
       } else {
           response.status(404).json({message: "No valid entry for provided ID"});
       }
   } catch (error) {
       response.status(500).json({
           error: error,
       })
   }
});

router.delete("/:marathonId", async (request, response, next) => {
    const id = request.params.marathonId;
   try {
       const result = Marathon.deleteOne({_id: id}).exec();
       response.status(200).json(result);
   } catch (error) {
       response.status(500).json({
           error: error,
       })
   }
});

module.exports = router;