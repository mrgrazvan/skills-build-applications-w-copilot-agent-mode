import { Router } from 'express';
import { Activity, Leaderboard, Team, User, Workout } from './models.js';

const createCollectionRouter = (resource: string, findDocuments: () => Promise<unknown[]>) => {
  const router = Router();

  router.get('/', async (_request, response, next) => {
    try {
      const data = await findDocuments();
      response.json({ resource, data });
    } catch (error) {
      next(error);
    }
  });

  return router;
};

export const usersRouter = createCollectionRouter('users', () => User.find().populate('team').lean());
export const teamsRouter = createCollectionRouter('teams', () => Team.find().lean());
export const activitiesRouter = createCollectionRouter('activities', () => Activity.find().populate('user').lean());
export const leaderboardRouter = createCollectionRouter('leaderboard', () => Leaderboard.find().sort({ rank: 1 }).populate('user team').lean());
export const workoutsRouter = createCollectionRouter('workouts', () => Workout.find().lean());
