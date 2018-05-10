const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const postSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags: {type: Array, required: false},
  date: {type: String, required: false}
}, { collection : 'post' });

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
