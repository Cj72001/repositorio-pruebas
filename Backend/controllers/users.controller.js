const User = require("../models/user.model");

module.exports.getUser = async (req, res, next) => {
  const user = await User.findOne({ userName: req.params.userName });
  if (user) {
    res.send(user);
  } else {
    res.status(404);
  }
};

module.exports.getUsers = async (req, res, next) => {
  const users = await User.find({});
  if (users) {
    res.send(users);
  } else {
    res.status(404);
  }
};

module.exports.newUser = (req, res, next) => {
  const { name, lastName, email, userName, password } = req.body;
  const user = new User({
    name,
    lastName,
    email,
    userName,
    password,
  });
  user.save((err, newUser) => {
    if (err) {
        console.error(err)
      res.status(500).send({ error: "Fail to save user in database" });
    } else {
      newUser.hashedPassword = undefined;
      res.send(newUser);
    }
  });
};
