const { model, Schema } = require("mongoose");

const PostSchema = new Schema({
  title: { type: String, required: true },
  body: String,
});

module.exports = model("Post", PostSchema);
