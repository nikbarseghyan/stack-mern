import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tegs: [String],
    selectFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

export const PostModel = mongoose.model('postSchema', postSchema)