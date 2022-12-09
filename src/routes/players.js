import { fetchPlayers } from '../models.js';

const players = async (req, res, next) => {
  try {
    const players = await fetchPlayers(req.params.teamId);
    res.json(players);
  } catch (error) {
    next(error);
  }
};

export default players