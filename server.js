const express = require('express')
// import sequelize connection

const app = express()
const { Category, Product, ProductTag, Tag } = require('./models')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(require('./routes'))

// sync sequelize models to the database, then turn on the server
async function init() {
    await require('./config/connection.js').sync()
    app.listen(process.env.PORT || 3001)
  }
  
  
  init()
