
const populate = [{ path: 'author' }, {
  path: 'commentChildren',
  select: ['author', 'content'],
  populate: {
    path: 'author',
  }
}]
// const status = ['unfulfilled', 'full']

module.exports = { populate }