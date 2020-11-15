import React, {useState, useEffect} from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import {useDispatch} from 'react-redux'
import {getPost} from '../actions/post.js'
import {Posts} from './Posts/Posts.jsx'
import {Form} from './Form/Form.jsx'
import useStyle from '../assets/index.cfg.js'

export const App = () => {
  const [currentId, setCurrentId] = useState(null),
    classes = useStyle(),
    dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost())
  }, [currentId,dispatch])

  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position="static" color='inherit'>
        <Typography className={classes.heading} variant='h6' align='center'> Create Task  </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justify='space-between' alignItems='stretch'>
            <Grid item xs={3} sm={5}>
              <Posts setCurrentId={setCurrentId} />
            </Grid >
            <Grid item xs={3} sm={3}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid >
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}
