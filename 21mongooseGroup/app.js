const mongoose = require('mongoose');
// connect
mongoose.connect('mongodb://127.0.0.1:27017/cms');
const db = mongoose.connection;
db.once('open', () => console.log('mongodb connect successful!'));
db.on('error', () => console.log('mongodb connect failed!'));
db.on('close', () => console.log('mongodb closed!'));
// defind schema
const userSchema = mongoose.Schema({
  name: String,
  age: Number,
  status: Number,
});
const userModel = mongoose.model('User', userSchema);
const res = (async () => {
    return userModel.find({});
})()
console.log(res);