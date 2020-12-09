import http from 'http'

import apiRoute from './routes'
import { express, db, winston } from './configs'
import { mongo, port, apiRoot } from './configs/variables'

const logger = winston(__filename)
const app = express(apiRoot, apiRoute)
const server = http.createServer(app)

setImmediate(() => {
  db.connect(mongo.uri).then(() => server.listen(port, () => {
    logger.info(`Server is running on ${port}`)
  }))
})
