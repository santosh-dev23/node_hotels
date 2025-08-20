const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/hotels'

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected', () => {
    console.log('connected to MongoDB server');
}) 

db.on('error', (err) => {
    console.error('mongoDB connection error:', err);
})

db.on('disconnected', () => {
    console.log('MonogoDB disconnected');
});

module.exports = db;