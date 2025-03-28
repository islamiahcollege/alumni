import mongoose from "mongoose";

const FeedSchema = new mongoose.Schema({
    name: { type: String, required: true },
    professional: { type: String, required: true },
    message: { type: String, required: true },
})

const Feed = mongoose.model('Feed', FeedSchema)

export default Feed;