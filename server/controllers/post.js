import {PostModel} from '../models/postModel.js'

export const getPost = async (req, res) => {
    try {
        const postModel = await PostModel.find();
        console.log('>>>>>>>', postModel);
        res.status(200).json(postModel);
    } catch (err) {
        res.status(404).json({message: err.message});
    }
}

export const createPost = async (req, res) => {
    const post = req.body,
        newPost = new PostModel(post);

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(409).json({message: err.message});
    }
}