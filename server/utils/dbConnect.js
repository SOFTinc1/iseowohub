const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://idowuelijah72:tiger694@cluster0.7uz0uek.mongodb.net/';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 5000 });

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
  }
};

const disconnectFromDatabase = async () => {
  try {
    await client.close();
    console.log('Disconnected from MongoDB Atlas');
  } catch (error) {
    console.error('Error disconnecting from MongoDB Atlas:', error);
  }
};

module.exports = { connectToDatabase, disconnectFromDatabase, client };