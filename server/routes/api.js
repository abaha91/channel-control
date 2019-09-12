const express = require("express");
const router = express.Router();
const Channel = require('../model');

router.get('/', (request, response) => {
    response.send('Here will be channely view soon');
});

router.get('/channel/:id', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    Channel.findOne({_id: request.params.id}).then(channel => response.send(channel));
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
           Channel.findOne({_id: request.params.id}).then(channel => response.send(`channel ${channel.name} succesfully changed`));
       })
});

router.delete("/channels/:id", (request, response) => {
    Channel.deleteOne({_id: request.params.id})
        .then(channel => {
            response.send(`channel ${request.params.id} succesfully deleted`);
        })
})


module.exports = router;