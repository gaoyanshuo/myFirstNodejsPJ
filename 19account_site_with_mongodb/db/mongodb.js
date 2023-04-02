module.exports = function (success, error) {
  const DB = require("../config/config")
  const {mongoose} = require('mongoose')
  mongoose.connect(`mongodb://${DB.DB_HOST}:${DB.DB_PORT}/${DB.DB_NAME}`)
  const db = mongoose.connection;
  db.once('open', () => success())
  db.on('error', () => {
    error()
    console.log('connect failed')
  })
  db.on('close', () => console.log('mongodb offline'))
}
