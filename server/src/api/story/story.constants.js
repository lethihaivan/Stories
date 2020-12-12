
const populate = [
  {
    path: 'categories',
    select: ['title']
  },
  {
    path: 'comments',
    populate: [,
      {
        path: 'author',
        select: ['fullName', 'avatarUrl']
      },
      {
        path: 'commentChildren',
        select: ['author', 'content'],
        populate: {
          path: 'author',
          select: ['fullName', 'avatarUrl']
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