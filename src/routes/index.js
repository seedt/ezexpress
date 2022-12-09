import express from 'express';

import teams from './teams.js';
import team from './team.js';
import players from './players.js';

const router = express.Router();

router.get('/teams', teams);
router.get('/team/:id', team);
router.get('/team/:teamId/players', players);

export default router;