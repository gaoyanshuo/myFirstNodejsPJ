// 1 . install mongoose pkg : npm i mongoose
// 2. require mongoose
const mongoose = require('mongoose');
// 3.connect mongoose
// mongodb:协议名称、127.0.0.1：ipAdress、27017：ポート、bilibili：DB Name
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');
// 4.setting call back (when open or error or close)
mongoose.connection.on('error', () => {
  console.log('mongoose connect failed');
});
mongoose.connection.on('close', () => {
  console.log('mongoose closed');
});

mongoose.connection.once('open', () => {
  console.log('mongoose connect succeeded');
  // 5. create document(row) object
  // Schema: 结构 (数据记录行/文档)对象
  // 设置文档的属性及其属性值的类型
  // String, Number, Boolean, Array, Date, Buffer, ObjectId
  // fk: mongoose.Schema.ObjectId

  // =========validator==========
  // title: {
  //   type: String,
  //   required: true // required
  //   default: 'default value' // default
  //   enum: ['a','b'] // enum (must in array)
  //   unique: true // unique (must remake collection!!! or didn't work)
  // },

  let BookSchema = mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    author: String,
    price: Number,
    is_sale: Boolean,
    pub_time: Date,
    tags: Array,
  });
  // 6. create model object 对文档操作的封装对象
  // CRUD for schema
  let bookModel = mongoose.model('books', BookSchema);

  // 7. add document (row) & close connect
  bookModel
    .create({
      name: '蛤蟆先生去看心理医生',
      author: 'xxx',
      price: 2000,
      is_sale: true,
      pub_time: new Date(),
      tags: [1, 2, 3],
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect());
});
