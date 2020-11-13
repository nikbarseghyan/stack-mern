import * as service from '../service'
import {FETCH_ALL, CREATE} from '../configs/constants.js'

export const getPost = () => async (dispatch) => {
        try {
            const {data} = await service.fetchPost();
            dispatch({ type: FETCH_ALL, payload: data});
        } catch (err) {
            console.log(err.message)
        }
    },
    createPost = post => async (dispatch) => {
        try {
            const {data} = await service.createPost(post);
            dispatch({ type: CREATE, payload: data});
        } catch (err) {
            console.log(err.message)
        }
    }