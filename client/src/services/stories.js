import axios from '../axios'

const path = '/stories'

// const getById = (id) => axios.get(url)
export const list = () => axios.get(path).then((res) => res.data)

export const getById = (id) => axios.get(`${path}/${id}`).then((res) => res.data)

export const create = () => axios.post(path, {
    "name": "Anh hùng xạ điêu 2",
    "description": "Xạ điêu bộ tam khúc",
    "categories": ["5fb497045edbac1c3c13eefc"],
    "chapters": [],
    "author": "5fb491a7807f1b2b506be175"
})


// function getById(id){

// }
// get post put delete

