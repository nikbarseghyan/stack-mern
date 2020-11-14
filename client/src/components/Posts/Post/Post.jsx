import React from 'react'
import moment from 'moment'
import {useDispatch} from 'react-redux'
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import useStyle from './style.cfg.js'
import {deletePost, likePost} from '../../../actions/post.js'

export const Post = ({post, setCurrentId}) => {
    const classes = useStyle(),
        dispatch = useDispatch(),
        handleBtnCLick = () => setCurrentId(post._id),
        handleDelete = () => dispatch(deletePost(post._id)),
        handleLike = () => dispatch(likePost(post._id));

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={`${post.selectFile}`} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant='h6'>{post.creator} </Typography>
                <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size='small' onClick={handleBtnCLick}>
                    <MoreHorizIcon fontSize='default' />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant='body2' color='textSecondary'>{post.tegs.map(tag => `#${tag} ` )}</Typography>
            </div>
            <Typography className={classes.title} variant='h5' gutterBottom >{post.title}</Typography>
            <CardContent>
                <Typography variant='body2' color='textSecondary' component='p' >{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button color='primary' size='small' onClick={handleLike} >
                    <ThumbUpAltIcon fontSize='default' />
                    &nbsp; Like &nbsp;
                    {post.likeCount}
                </Button>
                <Button color='primary' size='small' onClick={handleDelete} >
                    <DeleteIcon fontSize='default' />
                    &nbsp; Delete
                </Button>
            </CardActions>
        </Card>
    )
}