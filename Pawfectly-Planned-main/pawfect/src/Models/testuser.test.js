// Import your Mongoose models
const { User } = require('./index');

// Test suite for User model
describe('User Model', () => {
  // Test case for creating a new user
  it('should create a new user', async () => {
    const userData = {
      username: 'testuser',
      email: 'test@example.com',
      password: 'password123',
      totalStudyTime: 0,
      profilePic: 'profile.jpg'
    };

    // Create a new user
    const user = await User.create(userData);

    // Assert that the user was created successfully
    expect(user.username).toBe('testuser');
    expect(user.email).toBe('test@example.com');
    expect(user.totalStudyTime).toBe(0);
  });

  // Test case for fetching users
  it('should fetch users', async () => {
    // Fetch all users
    const users = await User.find();

    // Assert that there are users in the database
    expect(users.length).toBeGreaterThan(0);
  });

  // Add more test cases for other operations like updating, deleting, etc.
});
