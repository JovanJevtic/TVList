const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

//* Init server
const app = express();

//* Database connection
mongoose.connect( process.env.mongoURI , {useUnifiedTopology: true, useNewUrlParser: true});
const db = mongoose.connection;

//* Middlewares
app.use(express.json());

//* Cors enabled
const allowedOrigins = ['http://localhost:3000/'];
app.use(cors({
    origin: allowedOrigins
}));

//* Routes
app.use('/api/watchlists', require('./routes/watchlists.route'));
app.use('/api/movies', require('./routes/movies.route'));

//* Static files serve
let dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(dirname, '/client/build')));
  app.get('*', (req, res) => res.sendFile(path.resolve(dirname, 'client', 'build', 'index.html')));
} else {
  app.get('/', (req, res) => {
    res.send(`API is running.... in ${process.env.NODE_ENV} mode`);
  });
}

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database!'));

//* Running server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}, on ${process.env.NODE_ENV}mode!`));
