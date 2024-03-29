import axios from 'axios'
import {URL} from '../configs/database.js'

export const fetchPost = () => axios.get(URL),
    createPost = newPost => axios.post(URL, newPost),
    updatePost = (id, updatePost) => axios.patch(`${URL}/${id}`, updatePost),
    deletePost = id => axios.delete(`${URL}/${id}`),
    likePost = id => axios.patch(`${URL}/${id}/likePost`);