import axios from '../axios'

const path = '/http://localhost:9091/api/stories'

// const getById = (id) => axios.get(url)
export const list = () => axios.get(path).then((res) => res.data)

export const getById = (id) => axios.get(`${path}/${id}`).then((res) => res.data)

export const create = () => axios.post('/chapters', { chapter_nam: '123' })


// function getById(id){

// }

// get post put delete

