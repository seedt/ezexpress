import { fetchTeam } from '../models.js';

const team = async (req, res, next) => {
  try {
    const team = await fetchTeam(req.params.id);
    res.json(team);
  } catch (error) {
    next(error)
  }
};

export default team;