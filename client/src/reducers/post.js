import {FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../configs/constants.js'

export const post = (post = [], action) => {
    switch(action.type) {
        case LIKE:
            return post.map(posts => posts._id === action.payload._id ? action.payload : posts );
        case DELETE:
            return post.filter(post => post.id !== action.payload);
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