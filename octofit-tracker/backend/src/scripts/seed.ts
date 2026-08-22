import mongoose from 'mongoose';
import { Activity, Leaderboard, Team, User, Workout } from '../models.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Seed the octofit_db database with test data');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const teams = await Team.insertMany([
      { name: 'Summit Striders', motto: 'Climb higher together', color: '#167d8d' },
      { name: 'Trail Blazers', motto: 'Find your next mile', color: '#e07a5f' },
    ]);

    const users = await User.insertMany([
      { name: 'Mara Ionescu', email: 'mara@example.com', avatar: 'MI', team: teams[0]._id },
      { name: 'Alex Pop', email: 'alex@example.com', avatar: 'AP', team: teams[0]._id },
      { name: 'Daria Marin', email: 'daria@example.com', avatar: 'DM', team: teams[1]._id },
    ]);

    await Activity.insertMany([
      { user: users[0]._id, type: 'Morning run', durationMinutes: 42, points: 420, completedAt: new Date('2026-08-18') },
      { user: users[1]._id, type: 'Strength training', durationMinutes: 35, points: 350, completedAt: new Date('2026-08-19') },
      { user: users[2]._id, type: 'Cycling', durationMinutes: 55, points: 550, completedAt: new Date('2026-08-20') },
    ]);

    await Leaderboard.insertMany([
      { user: users[2]._id, team: teams[1]._id, points: 1250, rank: 1 },
      { user: users[0]._id, team: teams[0]._id, points: 1120, rank: 2 },
      { user: users[1]._id, team: teams[0]._id, points: 980, rank: 3 },
    ]);

    await Workout.insertMany([
      {
        title: 'Energizing 20',
        category: 'Cardio',
        difficulty: 'Beginner',
        durationMinutes: 20,
        exercises: ['Jumping jacks', 'High knees', 'Bodyweight squats'],
      },
      {
        title: 'Full-body foundation',
        category: 'Strength',
        difficulty: 'Intermediate',
        durationMinutes: 35,
        exercises: ['Push-ups', 'Reverse lunges', 'Plank shoulder taps'],
      },
    ]);

    console.log('Database seeding complete: 2 teams, 3 users, 3 activities, 3 leaderboard entries, 2 workouts');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
