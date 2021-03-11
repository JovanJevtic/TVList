const express = require('express');
const router = express.Router();
const Watchlist = require('../models/Wachlist');

router.get('/', async (req, res) => {
    try {
        const watchlists = await Watchlist.find();
        res.json(watchlists);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
});

router.post('/', async (req, res) => {
    const watchlist = new Watchlist({
        title: req.body.title,
        movies: []
    });

    try {
        const newWatchlist = watchlist.save();
        res.status(201).json(newWatchlist);
    } catch (err) {
        res.status(400).json({ message: "Couldn't create watchlist, please try again!" });
    }
});

router.get('/:id', async (req, res) => {
    let watchlist;
    try {
        watchlist = await Watchlist.findById(req.params.id);

        if (!watchlist) {
            return res.status(404).json({ message: 'Sorry, the watchlist you are looking for does not exist anymore!' });
        }

        res.watchlist = watchlist;
        res.json(res.watchlist);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    const watchlist = Watchlist.findById(req.params.id);

    if (watchlist) {
        try {
            await watchlist.remove();
            res.json({ msg: 'Successfully removed watchlist!' });
        } catch (err) {
            res.status(500).json({ err: err.message });
        }
    } else {
        res.status(404).json({ message: 'Sorry, the watchlist you are looking for does not exist anymore!' });
    }
});

router.patch('/:id', async (req, res) => {
    const { title, movies } = req.body;

    const watchlist = await Watchlist.findById(req.params.id);
    if (watchlist) {
        watchlist.title = title;
        watchlist.movies = movies;

        try {
            const updatedWatchlist = await watchlist.save();
            res.json(updatedWatchlist);
        } catch (err) {

        }
    } else {
        res.status(404).json({ msg: 'Sorry, the wathclist you are looking for does not exist anymore!' });
    }
});

module.exports = router;