const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const { registerValidation, loginValidation } = require('../validation');

// User Registration with validations
exports.AddUser = async function (req, res) {

  //validate data before we make new user
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);


  //check user already avalible
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send('Email already avaliable');

  //hash pwd
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //create new user
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    contactNumber: req.body.contactNumber,
    isAdmin: req.body.isAdmin,
    email: req.body.email,
    password: hashedPassword
  });
  try {
    const savedUser = await user.save();
    //res.send({ user: user._id });
    res.status(200).send(savedUser);

  } catch (err) {
    res.status(400).send(err);
  }
};

//User login with validations
exports.loginUser = async function (req, res) {

  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //check user email already avalible
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('Email is not found..');

  //check is password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send('Invalid password');

  //create and assing token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header('auth-token', token).send(token);

  res.send('Logged in!');

};




exports.getUser = function (req, res) {
  User.findById(req.params.id, function (err, users) {
    if (err) {
      res.json({ status: false, data: "Invalid ID!" });
    }

    res.json({ status: true, data: users });
  });
};

exports.getAllUser = function (req, res) {
  User.find({}, function (err, users) {
    if (err) {
      res.json({ status: false, data: "Invalid Request!" });
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
