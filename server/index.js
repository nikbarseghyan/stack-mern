import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import {PORT, M_DB_URL, M_OPTION} from './config/cfg.js'
import postRouter from './router/post.js'

const app = express()

app.use(bodyParser.json({limit: '22mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '22mb', extended: true}))
app.use(cors())
app.use('/post', postRouter)
app.use('/', (req,res) => res.send(`Create Task`))

mongoose.connect(M_DB_URL, M_OPTION)
    .then(() => app.listen(PORT, () => console.log(`Server is running, ${PORT}`)))
    .catch(err => console.log(`Connection error, ${err.message}`));

mongoose.set('useFindAndModify', false)