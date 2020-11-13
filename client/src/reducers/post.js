import {FETCH_ALL, CREATE, UPDATE} from '../configs/constants.js'

export const post = (post = [], action) => {
    switch(action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [ ...post, action.payload ];
        case UPDATE:
            return post.map(posts => posts._id === action.payload._id ? action.payload : posts );
        default:
            return post;
    }
}