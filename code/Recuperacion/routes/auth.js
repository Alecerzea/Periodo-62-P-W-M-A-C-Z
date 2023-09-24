const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const router = express.Router();
const secretKey = process.env.SECRET_KEY;

router.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
  const token = jwt.sign({ sub: req.user._id, role: req.user.role }, secretKey);
  res.json({ token });
});

module.exports = router;
