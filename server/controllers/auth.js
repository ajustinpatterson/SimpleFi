const config = require('../config/auth.config');
const db = require('../models/index.js');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
exports.signup = async (req, res) => {
  try {
    // Save User to Database
    console.log('req before query is ', req.body);
    const userExists = await db.default.UserFactory.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (!userExists) {
      db.default.UserFactory.create({
        id: req.body.id,
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
      }).then(res.send({ message: 'User was registered successfully!' }));
    } else {
      res.send({ message: 'Username taken' });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
exports.signin = async (req, res) => {
  console.log('user is ', req.body.username);
  try {
    const user = await db.default.UserFactory.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (!user) {
      return res.status(404).send({ message: 'User Not found.' });
    }
    console.log('right before bcrypt', req.body.password, user.password);
    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: 'Invalid Password!',
      });
    }
    console.log('password is valid!', passwordIsValid);
    console.log('config info is ', config);
    var token = jwt.sign({ id: user.id }, config.default.secret, {
      expiresIn: 86400, // 24 hours
    });
    console.log('token is ', token);
    res.status(200).send({
      id: user.id,
      username: user.username,
      email: user.email,
      accessToken: token,
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
