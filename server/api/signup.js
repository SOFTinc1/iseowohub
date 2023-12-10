// server/api/signup.js
import { connectToDatabase } from '../utils/dbConnect';
import User from '../models/User';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      displayName,
      username,
      password,
    //   profilePic,
    //   phoneNumber,
    //   address,
    //   userType,
    } = req.body;

    // Connect to MongoDB
    await connectToDatabase();

    // Create a new user
    const newUser = new User({
      displayName,
      username,
      password,
    //   profilePic,
    //   phoneNumber,
    //   address,
    //   userType,
    });

    try {
      // Save the user to the database
      await newUser.save();
      res.status(200).json({ message: 'User created successfully' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Error creating user' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
