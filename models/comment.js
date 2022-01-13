var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var commentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },

  video: {
    type: Schema.Types.ObjectId,
    ref: "Videos",
  },
});

module.exports = mongoose.model("Comments", commentSchema);
