import queryString from "query-string";

export const withQuery = (url, query) => {
  return queryString.stringifyUrl({ url, query }, { arrayFormat: 'comma' })
}

export const listUserByRole = (path, opts = {}) => {
  let url = `${path}?`
  if (opts.page) url += `&page=${opts.page}`
  if (opts.limit) url += `&limit=${opts.limit}`
  return url
}