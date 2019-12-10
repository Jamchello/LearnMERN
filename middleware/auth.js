const jwt = require('jsonwebtoken');
const config = require('config');
//A middleware function has access to req, res cycle.
//Next is a callback to run next piece of middleware.
module.exports = function(req, res, next) {
  //Get token from header ( sent when accessing protected routes)
  const token = req.header('x-auth-token');

  //Check if token not present.
  if (!token) {
    return res.status(401).json({ msg: 'No token, access denied.' });
  }
  try {
    //Try to get the decoded token
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    //user is in payload.
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is invalid, access denied.' });
  }
};
