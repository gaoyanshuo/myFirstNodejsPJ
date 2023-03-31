// import mongodb module
const db = require('./db/mongodb');
// import model module
const BookModel = require('./models/BookModel');
const mongoose = require('mongoose');
// 関数呼び出し
db(
  () => {
    // add document (row) & close connect
    BookModel.create({
      name: '蛤蟆先生去看心理医生',
      author: 'xxx',
      price: 2000,
      is_sale: true,
      pub_time: new Date(),
      tags: [1, 2, 3],
    })
      .then((result) => console.log(result))
      .catch((error) => console.error(error))
      .finally(() => mongoose.disconnect());
  }
);
