const express = require("express");
const router = express.Router();
const Channel = require('./../model');

router.get('/api', (request, response) => {
    response.send('Here will be channely view soon');
});

router.post("/channels", (request, response) => {
    Channel.create(request.body)
        .then(channel => {
            response.send(channel);
        })
});

router.put('/channels/:id', (request, response) => {
   Channel.findByIdAndUpdate({_id: request.params.id}, request.body)
       .then(() => {
           Channel.findOne({_id: request.params.id}).then(channel => response.send(channel));
       })
});


module.exports = router;