// server/models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  displayName: String,
  username: { type: String, unique: true },
  password: String,
  // profilePic: String,
  // phoneNumber: String,
  // address: String,
  // userType: { type: String, enum: ['artisan', 'others'] },
});

// Hash the password before saving to the database
userSchema.pre('save', async function (next) {
  const user = this;

  if (!user.isModified('password')) {
    return next();
  }

  user.password = await bcrypt.hash(user.password, 10);
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
