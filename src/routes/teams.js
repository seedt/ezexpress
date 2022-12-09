import { fetchTeams } from '../models.js';
 
const teams = async (req, res) => {
  const teams = await fetchTeams();
  res.json(teams);
}

export default teams;