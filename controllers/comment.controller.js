const Comment = require('../models/comment')
//const User = require("../models/user");

exports.getAllComment = function (req, res) {
    
    Comment.find({}, function (err, comments) {
        if (err) {
            res.json({ status: false, data: 'Invalid Request!' });
        }

        res.json({ status: true, data: comments });
    });
};


exports.AddComment = function (req, res) {
    let commentData = req.body;
        
            let AddComment = new Comment(commentData);

            AddComment.save(function (err, comment) {

                if (err) {
                    res.json({ status: false, data: 'Unable to add!' });
                }
                console.log(comment)
                res.json({ status: true, data: comment });
            });

};


exports.getComment = function (req, res) {
    Comment.findById(req.params.id, function (err, users) {
        if (err) {
            res.json({ status: false, data: 'Invalid ID!' });
        }

        res.json({ status: true, data: users });
    })
};


exports.updateComment = (req, res) => {
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Comment.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update comment with ${id}. Maybe user not found!`})
            }else{
                res.send({ message: "Comment was updated successfully." });
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}



exports.deleteComment = function (req, res) {
    Comment.deleteOne({ _id: req.params.id }, function (err, users) {
        if (err) {
            res.json({ status: false, data: 'Unable to delete!' });
        }

        res.json({ status: true, data: 'Comment has been removed successfully!' });
    })
};