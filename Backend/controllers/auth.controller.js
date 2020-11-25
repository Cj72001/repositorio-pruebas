const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const expressJWT = require("express-jwt");

exports.signup = async (req, res, next) => {
  const user = await User.findOne({
    email: req.body.email,
  });

  if (!user) {
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
        console.error(err);
        res.status(500).send({ error: "Fail to save user in database" });
      } else {
        newUser.hashedPassword = undefined;
        newUser.salt = undefined;
        res.send(newUser);
      }
    });
  } else {
    res.status(400).send({
      error: "Email is taken",
    });
  }
};

exports.signin = async (req, res, nex) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    if (!user.authenticate(password)) {
      return res.status(400).send({ error: "User and password dont match" });
    }
    const token = jwt.sign(
      {
        _id: user._id,
      },
      process.env.JWT_SECRET,
      {
        algorithm: 'HS256',
        expiresIn: "1d",
      }
    );

    const { _id, userName, name, lastName, email, role } = user;
    return res.send({
      token,
      user: {
        _id,
        userName,
        name,
        lastName,
        email,
        role,
      },
    });
  } else {
    return res.status(400).send({ error: "User and password dont match" });
  }
};

exports.requireSignin = expressJWT({
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256']
});

exports.adminMiddleWare = async (req, res, next) => {
    const adminUser = req.user._id
    const user = await User.findById(adminUser, '-hashedPassword -salt')
    if(user){
        if(user.role != 1){
            return res.status(403).send({ error: 'ACCESS DENIED'})
        }
        req.profile = user
        next()
    } else {
        return res.status(400).send({
            error: 'User not found'
        })
    }
}
