require('dotenv').config()
const path = require('path')
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 9091

app.use(cors())
app.use(helmet())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../../client/build')))
process.env.NODE_ENV !== 'test' && app.use(morgan('tiny'))


// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../client/build/index.html'))
// })


const chapters = [
  {
    id: 1,
    chapter_name: 'asd 1'
  },
  {
    id: 2,
    chapter_name: 'Chuonasdg  2'
  }
]
app.get('/api/chapters', (req, res) =>{
  res.json(chapters)
})

app.get('/api/chapters/:id', (req, res) =>{
  const id = req.params.id
  const chapter = chapters.filter(item => item.id == id)
  res.json(chapter[0])
})

app.post('/api/chapters', (req, res) =>{
  console.log(req.body, 'TEST')
  // res.json(chapters)
})

app.listen(port, () => console.log("Listening server " + port))