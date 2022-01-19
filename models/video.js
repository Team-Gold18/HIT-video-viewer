var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var VideoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },

  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Likes",
    },
  ],

  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comments",
    },
  ],

  subcategories: {
    type: Schema.Types.ObjectId,
    ref: "Subcategories",
  },
  uploadedBy: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  watchedBy: [
    {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
  ],
});

module.exports = mongoose.model("Videos", VideoSchema);
