import React from 'react'
import { useSelector } from 'react-redux'
import {Grid, CircularProgress} from '@material-ui/core'
import {Post} from './Post/Post.jsx'
import useStyle from './style.cfg.js'

export const Posts = ({setCurrentId}) => {
    const classes = useStyle(),
        post = useSelector(state => state.post); //reducer

    return (
        !post.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {post.map(post => (
                    <Grid key={post._id} item xs={12} sm={6}> 
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    )
}