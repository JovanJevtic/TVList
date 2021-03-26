const mongoose = require('mongoose');

const WatchlistSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    movies: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true, unique: false } 
    ]
});

module.exports = mongoose.model('Watchlist', WatchlistSchema);