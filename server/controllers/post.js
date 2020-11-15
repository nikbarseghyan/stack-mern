import mongoose  from 'mongoose';
import {PostModel} from '../models/postModel.js'

export const getPost = async (req, res) => {
        try {
            const postModel = await PostModel.find();
            res.status(200).json(postModel);
        } catch (err) {
            res.status(404).json({message: err.message});
        }
    },
    createPost = async (req, res) => {
        const post = req.body,
            newPost = new PostModel(post);

        try {
            await newPost.save();
            res.status(201).json(newPost);
        } catch (err) {
            res.status(409).json({message: err.message});
        }
    },
    updatePost = async (req, res) => {
        const {id: _id} = req.params,
            post = req.body;

        if(!mongoose.Types.ObjectId.isValid(_id ) ) return res.status(404).send(`No Post id`);

        const updatePost = await PostModel.findByIdAndUpdate(_id, {...post, _id }, {new: true} );

        res.json(updatePost)
    },
    deletePost = async (req, res) => {
        const {id} = req.params;
        console.log('DELETE>>>', id)
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Post id`);

        await PostModel.findByIdAndRemove(id);

        res.json({message: 'Post deleted'})
    },
    likePost = async (req, res) => {
        const {id} = req.params;

        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Post id`);
        
        const post = await PostModel.findById(id),
            updatePost = await PostModel.findByIdAndUpdate(id, {likeCount: post.likeCount + 1}, {new: true});
        
        res.json(updatePost)
    }