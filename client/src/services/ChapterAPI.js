import axios from '../axios'
import { listUserByRole } from '../helpers/api'

const path = '/chapters'

// const getById = (id) => axios.get(url)
export const list = (params) => axios.get(listUserByRole(path, params)).then((res) => res.data)

export const getById = (id) => axios.get(`${path}/${id}`).then((res) => res.data)

export const create = (data) => axios.post('/chapters', data)

// export const getAll = () => axios.get(path).then((res) => res.data)

// function getById(id){

// }

// get post put delete

