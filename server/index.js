const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 4300;

mongoose.connect("mongodb://localhost:27017/common_db");

app.use(bodyParser.json());
app.use('/', require('./routes/api'));

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
