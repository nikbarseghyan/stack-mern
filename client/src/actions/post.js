import * as service from '../service'
import {FETCH_ALL, CREATE, UPDATE, DELETE, LIKE} from '../configs/constants.js'

export const getPost = () => async (dispatch) => {
        try {
            const {data} = await service.fetchPost()

            dispatch({ type: FETCH_ALL, payload: data})
            
        } catch (err) {
            console.log(err)
        }
    },
    createPost = post => async (dispatch) => {
        try {
            const {data} = await service.createPost(post)

            dispatch({ type: CREATE, payload: data})

        } catch (err) {
            console.log(err)
        }
    },
    updatePost = (id, post) => async (dispatch) => {
        try {
            const {data} = await service.updatePost(id, post)

            dispatch({type: UPDATE, payload: data})

        } catch (err) {
            console.log(err)
        }
    },
    deletePost = id => async (dispatch) => {
        try {
            await service.deletePost(id);

            dispatch({type: DELETE, payload: id});

        } catch (err) {
            console.log(err)
        }
    },
    likePost = id => async (dispatch) => {
        try {
            const {data} = await service.likePost(id);

            dispatch({type: LIKE, payload: data})

        } catch (err) {
            console.log(err)
        }
    }