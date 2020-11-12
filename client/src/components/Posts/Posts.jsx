import React from 'react'
import {Post} from './Post/Post.jsx'
import useStyle from './style.cfg.js'

export const Posts = () => {
    const classes = useStyle();
    
    return (
        <>
            <h1>Posts</h1>
            <Post />
        </>
    )
}