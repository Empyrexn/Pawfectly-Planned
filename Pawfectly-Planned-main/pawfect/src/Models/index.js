const mongoose = require('mongoose');

// Connect to MongoDB
//mongoose.connect('mongodb+srv://admin:<password>@pawpatrol.znx1xoq.mongodb.net/?retryWrites=true&w=majority&appName=PawPatrol', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connect('mongodb+srv://UserNumberFrontEnd:FrontEnd1234@pawpatrol.znx1xoq.mongodb.net/PawPatrol', { useNewUrlParser: true, useUnifiedTopology: true })

  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));
// Define schemas
const ItemSchema = new mongoose.Schema({
  desc: String,
  price: Number,
  itemName: String
});
//UserNumberFrontEnd
//FrontEnd1234
const RewardSchema = new mongoose.Schema({
  rewardName: String,
  pointValue: Number // Assuming this should be a Number, not an ObjectId
});

const StudySessionSchema = new mongoose.Schema({
  endTime: Date,
  sessionStatus: String,
  sessionType: String,
  startTime: Date,
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  totalStudyTime: Number,
  profilePic: String
});


const UserItemSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  totalPoints: Number,
  totalSessions: Date
});

const UserRewardSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  rewardID: { type: mongoose.Schema.Types.ObjectId, ref: 'Reward' },
  acquiredDate: Date
});

const UserStatsSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  totalPoints: Number,
  totalSessions: Number
});

// Create models
const Item = mongoose.model('Item', ItemSchema);
const Reward = mongoose.model('Reward', RewardSchema);
const StudySession = mongoose.model('StudySession', StudySessionSchema);
const User = mongoose.model('User', UserSchema);
const UserItem = mongoose.model('UserItem', UserItemSchema);
const UserReward = mongoose.model('UserReward', UserRewardSchema);
const UserStats = mongoose.model('UserStats', UserStatsSchema);

// Export models
module.exports = {
  Item,
  Reward,
  StudySession,
  User,
  UserItem,
  UserReward,
  UserStats
};

const express = require('express'); // react.bs
const bodyParser = require('body-parser'); // parses object
const { google } = require('googleapis');
const app = express(); // really dont know
const port = 5000; // sets the server port


const cors = require('cors'); // needed for proepr axios calls



app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

app.post('/api/users', async (req, res) => {
  try {
    const { username, email, password } = req.body.obj; // pulls username Email and password or whatever we need from front end request
    // note backend names must match front end object names 
    // Create new user document

    const newUser = new User({ // creates user object as defined above to store
      username,
      email,
      password,
      totalStudyTime: 0,
      profilePic: 'default.jpg'
    });

    // Save user to database
    await newUser.save(); // saves to database

    res.status(201).json(newUser); // confirmation 
  } catch (error) { // rejection
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
app.post('/api/GetUser', async (req, res) => {
  try {
    const { username, password } = req.body.obj;
    
    // Search for the user in the database based on username and password
    const user = await User.findOne({ username, password });

    if (!user) {
      // If user with the provided username and password combination is not found, return an error message
      return res.status(404).json({ message: 'User not found or invalid credentials' });
    }

    // If user is found, return the user's email
    res.status(200).json({ _id: user._id });
  } catch (error) {
    console.error('Error retrieving user email:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//potential task grabber from google
/*
app.post('/api/GetTasks', async (req, res) => {
  try {
  
    const { YOUR_CLIENT_ID, YOUR_CLIENT_SECRET, YOUR_REDIRECT_URL, ACCESS_TOKEN, REFRESH_TOKEN } = req.body.obj;

    const oauth2Client = new google.auth.OAuth2(
      YOUR_CLIENT_ID,
      YOUR_CLIENT_SECRET,
      YOUR_REDIRECT_URL
    );

    // Set credentials
    oauth2Client.setCredentials({
      access_token: ACCESS_TOKEN,
      refresh_token: REFRESH_TOKEN
    });

    // Create Tasks API instance
    const tasks = google.tasks({ version: 'v1', auth: oauth2Client });

    // List tasklists
    const tasklistsResponse = await tasks.tasklists.list({});
    const tasklists = tasklistsResponse.data.items;

    if (tasklists) {
      console.log('Task Lists:');
      res.status(200).json(tasklists);
      tasklists.forEach((tasklist) => {
        console.log(`${tasklist.title} (${tasklist.id})`);
      });
    } else {
      console.log('No task lists found.');
      res.status(404).json({ message: 'No task lists found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});*/
