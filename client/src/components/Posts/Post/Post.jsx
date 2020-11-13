import React from 'react'
import moment from 'moment'
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import useStyle from './style.cfg.js'

export const Post = ({post, setCurrentId}) => {
    const classes = useStyle(),
        handleBtnCLick = () => setCurrentId(post._id);

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant='h6'>{post.creator} </Typography>
                <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size='small' onCLick={handleBtnCLick}>
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
                <Button color='primary' size='small' onCLick={()=>{}} >
                    <ThumbUpAltIcon fontSize='default' />
                    Like
                    {post.likeCount}
                </Button>
                <Button color='primary' size='small' onCLick={()=>{}} >
                    <DeleteIcon fontSize='default' />
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}