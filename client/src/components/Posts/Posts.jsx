import React from 'react'
import { useSelector } from 'react-redux'
import {Post} from './Post/Post.jsx'
import useStyle from './style.cfg.js'

export const Posts = () => {
    const classes = useStyle(),
        post = useSelector(state => state.post); //reducer
    console.log('>>>>', post);
    return (
        <>
            <h1>Posts</h1>
            <Post />
        </>
    )
}