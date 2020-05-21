const jwt = require('jsonwebtoken');
const keys = require("../config/keys");
const User = require('../models/index')['SatuanKerja'];

module.exports = {
  verifyToken(req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers.authorization;
    // return res.status(401).json(token);
    token = token.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({
        message: 'Must pass token'
      });
    }
    // decode token
    jwt.verify(token, keys.secretOrKey, function (err, user) {
      if (err)
        return res.status(401).json({
          message: 'token invalid'
        });

      //return user using the id from w/in JWTToken
      User.findByPk(user.id)
        .then(user => {
        res.json({
          user: user,
          token: token
        });
      });
    });
  },
}