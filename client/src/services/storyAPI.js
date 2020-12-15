import axios from '../axios'
import { withQuery, listUserByRole } from '../helpers/api';

const path = '/stories'

const removeAll = () => {
  return axios.delete(`${path}`);
};


const findByTitle = title => {
  // return http.get(`/stories?title=${title}`);
};

export const getAll = (params) => axios.get(listUserByRole(path, params)).then((res) => res.data)
export const getAuthors = () => axios.get('/authors').then((res) => res.data)
export const getCategories = () => axios.get('/categories').then((res) => res.data.data)

const getById = (id) => axios.get(`${path}/${id}`).then((res) => res.data)

const create = (data) => axios.post('/stories', data)

const update = (id, data) => axios.put(`${path}/${id}`, data).then((res) => res.data)

const remove = id => {
  return axios.delete(`${path}/${id}`);
};
export default {
  getAll,
  getAuthors,
  getCategories,
  getById,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};