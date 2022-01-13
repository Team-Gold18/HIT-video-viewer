var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var categorySchema = new Schema({
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
  subcategories: [
    {
      type: Schema.Types.ObjectId,
      ref: "Subcategories",
    },
  ],
});

module.exports = mongoose.model("Categories", categorySchema);
