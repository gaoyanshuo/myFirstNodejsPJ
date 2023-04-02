const {mongoose} = require('mongoose')
const accountSchema = mongoose.Schema({
  "title": {
    type: String,
    required: true
  },
  "time": Date,
//  収入＆支出
  "type": {
    type: Number,
    default: -1
  },
  "account": {
    type: Number,
    required: true
  },
  "remarks": String
})
const accountModel = mongoose.model('account', accountSchema)

module.exports = accountModel