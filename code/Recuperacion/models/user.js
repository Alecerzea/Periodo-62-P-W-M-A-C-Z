const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: String, // Puede ser 'admin' o 'docente'
});

module.exports = mongoose.model('User', userSchema);
