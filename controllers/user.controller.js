const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.getAllUser = function (req, res) {
  User.find({}, function (err, users) {
    if (err) {
      res.json({ status: false, data: "Invalid Request!" });
    }

    res.json({ status: true, data: users });
  });
};

exports.loginUser = function (req, res) {
  var userData = req.body;

  User.findOne({ email: userData.email }, (error, user) => {
    if (error) {
      console.log(error);
    } else if (!user) {
      res.status(401).send("Invalid email");
    } else if (user.password !== userData.password) {
      res.status(401).send("Invalid password");
    } else {
     
      let payload = { subject: user._id };
      let token = jwt.sign(payload, "secretKey");
      res.status(200).send({ token });
      
    }
  });
};

exports.AddUser = function (req, res) {
  let userData = req.body;

  User.findOne({ email: req.body.email }, (error, user) => {
    if (error) {
      console.log(error);
    } else if (!user) {
      let user = new User(userData);
      user.save((error, registeredUser) => {
        if (error) {
          console.log(error);
        } else {
          let payload = { subject: registeredUser._id };
          let token = jwt.sign(payload, "secretKey");
          res.status(200).send({ token, user });
        }
      });
    } else {
      console.log("email Already exists");
      res.json({ status: false, data: "email Already exists!" });
    }
  });
};

exports.getUser = function (req, res) {
  User.findById(req.params.id, function (err, users) {
    if (err) {
      res.json({ status: false, data: "Invalid ID!" });
    }

    res.json({ status: true, data: users });
  });
};

exports.updateUser = function (req, res) {
  const id = req.params.id;
  User.findOne({ email: req.body.email }, (error, user) => {
    if (error) {
      console.log(error);
    } else if (!user || (user && user.id == id)) {
      User.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true },
        function (err, users) {
          if (err) {
            res.json({ status: false, data: "Unable to update!" });
          }
          res.json({ status: true, data: users });
        }
      );
    } else {
      console.log("Email Already exists");
      res.json({ status: false, data: "Email Already exists!" });
    }
  });
};

exports.deleteUser = function (req, res) {
  User.remove({ _id: req.params.id }, function (err, users) {
    if (err) {
      res.json({ status: false, data: "Unable to delete!" });
    }

    res.json({ status: true, data: "Users removed successfully!" });
  });
};
