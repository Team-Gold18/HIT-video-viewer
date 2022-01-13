const User = require("../models/user");


exports.getAllUser = function(req, res) {
    User.find({}, function(err, users) {
        if(err) {
            res.json({status: false, data: 'Invalid Request!'});
        }

        res.json({status: true, data: users});
    });
};




  exports.AddUser = function(req, res) {
    let userData = req.body;
    User.findOne({ email : req.body.email}, (error, user) =>{
      if(error){
        console.log(error)
      }
      else if(!user) {
        let AddUser = new User(userData);
        
        AddUser.save(function(err, users) {

        if(err) {
            res.json({status: false, data: 'Unable to add!'});
        }
        console.log(users)
        res.json({status: true, data: users});
    });
}

    else {
        console.log("email Already exists")
        res.json({status: false, data: 'email Already exists!'});
      }
    
})
};


exports.getUser = function(req, res) {
    User.findById(req.params.id, function(err, users) {
        if(err) {
            res.json({status: false, data: 'Invalid ID!'});
        }

        res.json({status: true, data: users});
    })
};


exports.updateUser = function(req, res) {
    const id =req.params.id;
    User.findOne({ email : req.body.email}, (error, user) =>{
      if(error){
        console.log(error)
      }
      else if((!user)|| (user && (user.id==id)))  {
    User.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, users) {
        if(err) {
            res.json({status: false, data: 'Unable to update!'});
        }
        res.json({status: true, data: users});
    });
}
    else {
        console.log("Email Already exists")
        res.json({status: false, data: 'Email Already exists!'});
      }
    })
};






exports.deleteUser = function(req, res) {
    User.remove({_id: req.params.id}, function(err, users) {
        if(err) {
            res.json({status: false, data: 'Unable to delete!'});
        }

        res.json({status: true, data: 'Users removed successfully!'});
    })
};






 
