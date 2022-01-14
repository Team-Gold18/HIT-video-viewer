const Like = require("../models/like");


exports.getAllLike = function(req, res) {
    Like.find({}, function(err, likes) {
        if(err) {
            res.json({status: false, data: 'Invalid Request!'});
        }

        res.json({status: true, data: likes});
    });
};

exports.AddLike = function(req, res) {
    var newLike= new Like(req.body);

    newLike.save(function(err, like) {
        if(err) {
            res.json({status: false, data: 'Unable to add!'});
        }

        res.json({status: true, data: like});
    });
};

exports.getLike = function(req, res) {
    Like.findById(req.params.id, function(err, like) {
        if(err) {
            res.json({status: false, data: 'Invalid ID!'});
        }

        res.json({status: true, data: like});
    })
};



exports.deleteLike = function(req, res) {
    Like.remove({_id: req.params.id}, function(err, like) {
        if(err) {
            res.json({status: false, data: 'Unable to delete!'});
        }

        res.json({status: true, data: 'like removed successfully!'});
    })
};