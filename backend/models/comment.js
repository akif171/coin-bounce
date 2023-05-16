const mongoose = require("mongoose")

const { Schema } = mongoose

const commentSchema = new Schema({
    content: { type: String, required: true },
    blog: { type: mongoose.Types.ObjectId, ref: "Blog" },
    author: { type: mongoose.Types.ObjectId, ref: "User" },

},
    { timestamps: true }
)

module.exports = mongoose.model("Comment", commentSchema, "comments")