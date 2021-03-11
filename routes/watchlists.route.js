const express = require('express');
const router = express.Router();
const {
    getAllWatchlists,
    getSingleWatchlist,
    createWatchlist,
    updateWatchlist,
    deleteWatchlist
} = require('../controllers/watchlists.controller');

router.get('/', getAllWatchlists);

router.post('/', createWatchlist);

router.get('/:id', getSingleWatchlist);

router.delete('/:id', deleteWatchlist);

router.patch('/:id', updateWatchlist);

module.exports = router;