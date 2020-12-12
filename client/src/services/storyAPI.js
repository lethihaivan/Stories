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

const getById = (id) => axios.get(`${path}/${id}`).then((res) => res.data)

const create = (data) => axios.post('/stories', data)

const update = (id) => { axios.put(`${path}/${id}`).then((res) => res.data); };

const remove = id => {
  return axios.delete(`${path}/${id}`);
};

export default {
  getAll,
  getById,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};