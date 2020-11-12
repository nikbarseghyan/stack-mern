import axios from 'axios'
import {URL} from '../configs/database.js'

export const fetchPost = () => axios.get(URL);