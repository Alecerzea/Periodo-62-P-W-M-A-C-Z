const passport = require('passport');
const User = require('../models/user');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
require('dotenv').config();

const secretKey = process.env.SECRET_KEY;

// Configurar estrategia local (inicio de sesión con nombre de usuario y contraseña)
passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username }, (err, user) => {
      if (err) return done(err);
      if (!user) return done(null, false);
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) return done(err);
        if (!isMatch) return done(null, false);
        return done(null, user);
      });
    });
  })
);

// Configurar estrategia JWT (autenticación basada en token)
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: secretKey,
};

passport.use(
  new JwtStrategy(jwtOptions, (payload, done) => {
    User.findById(payload.sub, (err, user) => {
      if (err) return done(err, false);
      if (user) return done(null, user);
      else return done(null, false);
    });
  })
);
