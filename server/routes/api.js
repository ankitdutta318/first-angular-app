const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const post = require('../models/post');

const db = "mongodb://geekankit318:ashushaan318@ds155651.mlab.com:55651/codepost";

mongoose.Promise = global.Promise;
mongoose.connect(db, (err) => {
    if(err) {
        console.log('Coonection Error');
    }
});

router.get('/posts', (req, res) => {
    console.log('Requesting posts...');
    post.find({})
        .exec((err, posts) => {
            if(err) {
                console.log('Error getting the posts.');
            } else {
                res.json(posts);
                console.log(posts);
            }
        })
});

module.exports = router;