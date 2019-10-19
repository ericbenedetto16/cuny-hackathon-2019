const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const restrooms = require('./routes/api/v1/restroom');
const refills = require('./routes/api/v1/water');

const app = express();

// BodyParser MiddleWare
app.use(bodyParser.json());

// Database Initialization
const db = process.env.MONGO_URI;

// MongoDB Connection
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err))

// Use Routes
app.use('/api/v1/restrooms', restrooms);
app.use('/api/v1/refills', refills);

// Serve Static Assets in Production
if(process.env.NODE_ENV === 'production') {
    // Set Static Folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
} 

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));