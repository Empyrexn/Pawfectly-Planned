const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:admin@pawpatrol.znx1xoq.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

// Define schemas
const ItemSchema = new mongoose.Schema({
  desc: String,
  price: Number,
  itemName: String
});

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
