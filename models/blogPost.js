const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const BlogPostSchema = new Schema({
  title: String,
  detail: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});
const BlogPost = mongoose.model("BlogPost", BlogPostSchema);

module.exports = BlogPost;
