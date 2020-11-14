import React from 'react'
import moment from 'moment'
import {useDispatch} from 'react-redux'
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import useStyle from './style.cfg.js'
import {deletePost} from '../../../actions/post.js'

export const Post = ({post, setCurrentId}) => {
    const classes = useStyle(),
        handleBtnCLick = () => setCurrentId(post._id),
        dispatch = useDispatch(),
        handleDelete = () => {
            console.log('>>>>>', post._id);
            dispatch(deletePost(post._id))
        }
        const handleLike = () => {
            console.log('LIKE>>>>>')
        }
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
                <Typography variant='body2' color='textSecondary'>{post.tegs.map((tag) => `#${tag} ` )}</Typography>
            </div>
            <Typography className={classes.title} variant='h5' gutterBottom >{post.title}</Typography>
            <CardContent>
                <Typography variant='h5' gutterBottom >{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button color='primary' size='small' onClick={handleLike} >
                    <ThumbUpAltIcon fontSize='default' />
                    Like
                    {post.likeCount}
                </Button>
                <Button color='primary' size='small' onClick={handleDelete} >
                    <DeleteIcon fontSize='default' />
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}