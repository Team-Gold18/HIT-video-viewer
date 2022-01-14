var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var subcategorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },

  categories: {
    type: Schema.Types.ObjectId,
    ref: "Categories",
  },

  video: [
    {
      type: Schema.Types.ObjectId,
      ref: "Videos",
    },
  ],
});

module.exports = mongoose.model("Subcategories", subcategorySchema);
//sample comment