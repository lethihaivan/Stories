import axios from '../axios'

const path = '/stories'

// const getById = (id) => axios.get(url)
export const list = () => axios.get(path).then((res) => res.data)

export const getById = (id) => axios.get(`${path}/${id}`).then((res) => res.data)
export const GetChapterOfStory = (id) => axios.get(`${path}/${id}/chapters?page=1&limit=5`);
export const create = data => axios.post(path, data);

// function getById(id){

// }
// get post put delete

