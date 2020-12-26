const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config({path: path.resolve(__dirname, '../.env')});

const {PORT} = process.env;

const api = require('./api');
const db = require('./db/database-manager');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', api);
app.use((req, res, next) => {
    console.log(JSON.stringify(req))
    next({status: 404})
});

db.connect()
    .then(() => app.listen(PORT, () => console.log(`Server is listening on ${PORT}`)));