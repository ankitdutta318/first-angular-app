const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    url: String,
    decription: String
});

module.exports = mongoose.model('post', postSchema);