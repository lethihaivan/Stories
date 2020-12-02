
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
    path: 'author',
    select: ['fullName'],
  },
  {
    path: 'chapters'
  },
  {
    path: 'createdBy'
  }
]
const status = ['unfulfilled', 'full']

export { populate, status }