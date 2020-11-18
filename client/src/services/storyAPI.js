import axios from '../axios'

const path = '/http://localhost:9091/api/stories'

const removeAll = () => {
  return axios.delete(`${path}`);
};

const findByTitle = title => {
 // return http.get(`/stories?title=${title}`);
};
 const getAll = () => axios.get(path).then((res) => res.data)

 const getById = (id) => axios.get(`${path}/${id}`).then((res) => res.data)

 const create = (data) => axios.post('/stories', data)
 
const update = (id) => { axios.put(`${path}/${id}`).then((res) => res.data);};

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