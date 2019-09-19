const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const ChannelSchema = new Schema({
    name: String,
    iconUrl: String,
});

const Channel = mongoose.model('Channels', ChannelSchema);
module.exports = Channel;