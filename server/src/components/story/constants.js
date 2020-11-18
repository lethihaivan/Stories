
const populate = [
  {
    path: 'categories',
  },
  {
    path: 'comments',
    populate: [,
      {
        path: 'author'
      },
      {
        path: 'commentChildren',
        select: ['author', 'content'],
        populate: {
          path: 'author',
        }
      }]
  },
  {
    path: 'chapters'
  },
  {
    path: 'author'
  }
]
const status = ['unfulfilled', 'full']

module.exports = { populate, status }