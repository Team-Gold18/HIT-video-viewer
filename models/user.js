var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstName: {
    type: String,
    required: "Please enter first name of the user",
  },
  lastName: {
    type: String,
    required: "Please enter last name of the user",
  },

  contactNumber: {
    type: [String],
    required: "Please enter contact number of the user",
  },
  isAdmin: {
    type: Boolean,
    required: "Please enter password of the user",
    default: false,
  },
  email: {
    type: String,
    required: "Please enter email of the user",
  },
  password: {
    type: String,
    required: "Please enter password of the user",
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

  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: "Categories",
    },
  ],

  subcategories: [
    {
      type: Schema.Types.ObjectId,
      ref: "Subcategories",
    },
  ],

  uploadVideos: [
    {
      type: Schema.Types.ObjectId,
      ref: "Videos",
    },
  ],

  video: [
    {
      type: Schema.Types.ObjectId,
      ref: "Videos",
    },
  ],
});

module.exports = mongoose.model("Users", UserSchema);
