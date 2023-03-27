// 1 . install mongoose pkg : npm i mongoose
// 2. require mongoose
const mongoose = require('mongoose');
// 3.connect mongoose
// mongodb:协议名称、127.0.0.1：ipAdress、27017：ポート、bilibili：DB Name
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');
// 4.setting call back (when open or error or close)
mongoose.connection.once('open', () => {console.log('mongoose connect successed');}); // connect successed call back
mongoose.connection.on('error', () => {console.log('mongoose connect failed');}); // connect failed call back
mongoose.connection.on('close', () => {console.log('mongoose closed');}); // connect closed call back

// close test
setTimeout(()=> {
    mongoose.disconnect()
}, 2000)