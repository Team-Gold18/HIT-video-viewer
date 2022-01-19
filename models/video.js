

const mongoose = require("mongoose"),
  { Schema } = mongoose,
  VideoSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      url: {
        type: String,
      },
      
      id: {
        type: String,
        unique: true,
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
    },
    
    {
      timestamps: true,
    },
    
  );
module.exports = mongoose.model("Video", VideoSchema);