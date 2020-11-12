import React from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import mario from '../images/mario.png'

import {Posts} from './Posts/Posts.jsx'
import {Form} from './Form/Form.jsx'

export const App = () => {
  return (
    <Container maxWidth='lg'>
      <AppBar position="static" color='inherit'>
        <Typography variant='h2' align='center'> Mario  </Typography>
        <img src={mario} alt='mario' width='350'  height='350'/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems='stretch'>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid >
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid >
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}
