// const e = require('express');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

const fs = require('fs');
const path = require('path');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const { animals } = require('./data/animals.json');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use(express.static('public'));



app.listen(PORT, () => {
    console.log(`API Server now on port ${PORT}!`);
});