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
        handleDelete = () => { 
            console.log('>>>DELET', post._id);
            dispatch(deletePost(post._id))},
        handleLike = () => dispatch(likePost(post._id));

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={`${post.selectFile}`} alt={post.title} title={post.title} component='div' />
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
                {console.log('>>>>>>>', post.message)}
                <Typography variant='body2' color='textSecondary' component='p' >{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button color='primary' size='small' onClick={handleLike} startIcon={<ThumbUpAltIcon />}>
                    {post.likeCount}
                </Button>
                <Button color='secondary' size='small' onClick={handleDelete} startIcon={<DeleteIcon />} />
            </CardActions>
        </Card>
    )
}