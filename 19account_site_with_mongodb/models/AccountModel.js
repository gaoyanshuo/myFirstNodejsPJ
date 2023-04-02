const {mongoose} = require('mongoose')
const accountSchema = mongoose.Schema({
  "title": String,
  "time": "2023-03-26",
  "type": Number,
  "account": Number,
  "remarks": String
})
const accountModel = mongoose.model('account', accountSchema)

module.exports = accountModel