import React, {useState, useEffect} from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import {useDispatch} from 'react-redux'
import {getPost} from '../actions/post.js'
import mario from '../images/mario.png'
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
        <Typography className={classes.heading} variant='h2' align='center'> Mario  </Typography>
        <img className={classes.image} src={mario} alt='mario' width='350'  height='350'/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems='stretch'>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid >
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid >
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}
