const express = require('express');

const app = express();
app.use(express.json());

const itemRouter = require('./routes/itemRouter');

app.use('/api/items' , itemRouter);

module.exports = app;