require('dotenv').config()
const path = require('path')
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')

const db = require('./db')
const apiRoute = require('./routes')
const app = express()

app.use(cors())
app.use(helmet())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../../client/build')))
process.env.NODE_ENV !== 'test' && app.use(morgan('tiny'))
app.use('/api', apiRoute)

// DB_URI=mongodb://127.0.0.1:27017/webStories
const DB_URI = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
const PORT = process.env.PORT || 9091;
// console.log(DB_URI)

db.connect(DB_URI).then(() => {
  app.listen(PORT, () => console.log("Listening server port: " + PORT));
});

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../client/build/index.html'))
// })
