import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import passport from 'passport'

import db from './configs/db'
import apiRoute from './routes'
import { mongo, port, env, apiRoot } from './configs/variables'

const app = express()

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(passport.initialize())
// app.use('/static', express.static(__dirname + '/src/public'))
// console.log(path.join(__dirname, './assets/images'))
env !== 'test' && app.use(morgan('tiny'))
app.use(apiRoot, apiRoute)

db.connect(mongo.uri).then(() => {
  app.listen(port, () => console.log("Listening server port: " + port));
});

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../client/build/index.html'))
// })
