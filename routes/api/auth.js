//Handles json web token authentication
const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// @route   GET api/auth
// @desc
// @access  Public
router.get('/', auth, (req, res) => {
  res.send('Auth route');
});

module.exports = router;
