import mongoose from 'mongoose';

const Schema = mongoose.Schema;

/**
 * Post schema that has references to User, Like and Comment schemas
 */
const postSchema = Schema(
    {
        title: String,
        image: String,
        imagePublicId: String,
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        authorNativeLanguage: String,
        authorTargetLanguage: String,
        likes: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Like',
            },
        ],
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Comment',
            },
        ],
        isForumPost: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('Post', postSchema);
