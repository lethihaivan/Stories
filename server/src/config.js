// const path = require('path')

// const requiredProcessEnv = (name) => {
//   if (process.env[name]) return process.env[name]
//   throw new Error('You must set the ' + name + ' environment variable')
// }

// const config = {
//   common: {
//     env: process.env.NODE_ENV || 'development',
//     root: path.join(__dirname, '..'),
//     port: process.env.PORT || 9091,
//     ip: process.env.IP || '0.0.0.0',
//     apiRoot: process.env.API_ROOT || '/api',
//     masterKey: requireProcessEnv('MASTER_KEY'),
//     jwtSecret: requireProcessEnv('JWT_SECRET'),
//     db: { mongo: { options: { db: true } } },

//   },
//   test: {},
//   development: {
//     db: {
//       mongo: {
//         uri: `mongodb://${requireProcessEnv('DB_HOST')}/${requireProcessEnv('DB_NAME')}`,
//         options: { debug: true }
//       }
//     }
//   },
//   stag: {
//     ip: process.env.IP || undefined,
//     port: process.env.PORT || 9092,
//     db:{mongo: uri: process}
//   }
// }