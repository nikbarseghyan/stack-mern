import React, {useState, useEffect} from 'react'
import FileBase from 'react-file-base64'
import {TextField, Button, Typography, Paper} from '@material-ui/core'
import {useDispatch, useSelector} from 'react-redux'
import useStyle from './style.cfg.js'
import {createPost, updatePost} from '../../actions/post.js'

export const Form = ({currentId, setCurrentId}) => {
    const [postData, setpostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' }),
        classes = useStyle(),
        dispatch = useDispatch(),
        handleClear = () => {
            setCurrentId(null);
            setpostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
        },
        handleSubmit = ev => {
            ev.preventDefault();
            currentId ? dispatch(updatePost(currentId, postData)) : dispatch(createPost(postData)); 

            handleClear();
        },
        post = useSelector(state => currentId ? state.post.find(i => i._id === currentId) : null);

    useEffect(() => {
        if(post) setpostData(post)
    }, [post]);

    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'> {currentId ? 'Editing' : 'Creating'} memory </Typography>
                <TextField name='creator' variant='outlined' label='Creator' fullWidth value={postData.creator} onChange={ev => setpostData({...postData, creator: ev.target.value})}/>
                <TextField name='title' variant='outlined' label='Title' fullWidth value={postData.title} onChange={ev => setpostData({...postData, title: ev.target.value})}/>
                <TextField name='message' variant='outlined' label='Message' fullWidth value={postData.message} onChange={ev => setpostData({...postData, message: ev.target.value})}/>
                <TextField name='tags' variant='outlined' label='Tags' fullWidth value={postData.tags} onChange={ev => setpostData({...postData, tags: ev.target.value})}/>
                <div className={classes.fileInput}>
                    <FileBase type='file' multiple={false} onDone={({base64})=>setpostData({...postData, selectedFile: base64})} />
                </div>
                <Button className={classes.buttonSubmit} variant='contained' color='primary' size='small' type='submit' fullWidth> Submit </Button>
                <Button className={classes.buttonSubmit} variant='contained' color='secondary' size='small' onClick={handleClear} fullWidth> Clear </Button>
            </form>
        </Paper>
    )
}