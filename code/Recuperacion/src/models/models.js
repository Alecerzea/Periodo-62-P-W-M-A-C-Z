const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const TeacherSchema = new mongoose.Schema({
  id: String,
  firstName: String,
  lastName: String,
  username: String,
  password: String,
  role: { type: String, default: 'teacher' },
});

TeacherSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next();
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

TeacherSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('Teacher', TeacherSchema);
