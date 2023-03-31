const mongoose = require('mongoose');
let BookSchema = new mongoose.Schema({
  name: String,
  author: String,
  price: Number,
  is_sale: Boolean,
  pub_time: Date,
  tags: Array,
});

// create model object 对文档操作的封装对象
// CRUD for schema
let BookModel = mongoose.model('books', BookSchema);

module.exports = BookModel;
