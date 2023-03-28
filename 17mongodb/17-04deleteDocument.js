//1. 安装 mongoose
//2. 导入 mongoose
const mongoose = require('mongoose');

//设置 strictQuery 为 true
mongoose.set('strictQuery', true);

//3. 连接 mongodb 服务                        数据库的名称
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

//4. 设置回调
// 设置连接成功的回调  once 一次   事件回调函数只执行一次
mongoose.connection.once('open', async () => {
  //5. 创建文档的结构对象
  //设置集合中文档的属性以及属性值的类型
  let BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
    is_hot: Boolean,
  });

  //6. 创建模型对象  对文档操作的封装对象    mongoose 会使用集合名称的复数, 创建集合
  let BookModel = mongoose.model('novel', BookSchema);

  //7. delete document

  //  删除集合下全部文档：
  // Model.deleteMany({})

  // 删除 status 等于 A 的全部文档：
  // Model.deleteMany({ status : "A" })

  // 删除 status 等于 D 的一个文档：
  // Model.deleteOne( { status: "D" } )

  // deleteOne({})
  // const deleteResult = await BookModel.deleteOne({ name: '黑暗王者' });
  // console.log('deleteResult: ', deleteResult);

  // deleteMany({})
  const deleteManyRes = await BookModel.deleteMany({ is_hot: false });
  console.log('deleteManyRes', deleteManyRes);

  // 设置连接错误的回调
  mongoose.connection.on('error', () => {
    console.log('连接失败');
  });

  //设置连接关闭的回调
  mongoose.connection.on('close', () => {
    console.log('连接关闭');
  });
});
