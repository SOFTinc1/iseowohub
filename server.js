const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const { connectToDatabase } = require('./server/utils/dbConnect');
const User = require('./server/models/User');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// Connect to MongoDB
connectToDatabase();

app.use(bodyParser.json());

// Signup route
app.post('/api/signup', async (req, res) => {
  const {
    displayName,
    username,
    password,
    profilePic,
    phoneNumber,
    address,
    userType,
  } = req.body;

  const newUser = new User({
    displayName,
    username,
    password,
    profilePic,
    phoneNumber,
    address,
    userType,
  });

  try {
    await newUser.save();
    res.status(200).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating user' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
