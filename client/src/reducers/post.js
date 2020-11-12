import {FETCH_ALL, CREATE} from '../configs/constants.js'

export const post = (post = [], action) => {
    switch(action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return post;
        default:
            return post;
    }
}