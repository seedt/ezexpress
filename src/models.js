const teams = [
  {name: 'Manchester United', id: '1' },
  {name: 'Liverpool', id: '2' },
  {name: 'Chelsea', id: '3' },
  {name: 'Spurs', id: '4' },
  {name: 'Manchester City', id: '5' },
  {name: 'Arsenal', id: '6' },
];

const players = [
  { name: 'Ronaldo', teamId: '1', id: '1'},
  { name: 'Salah', teamId: '2', id: '2' },
  { name: 'Player 3', teamId: '3', id: '3' },
  { name: 'Player 4', teamId: '3', id: '4' },
  { name: 'Player 5', teamId: '4', id: '5' },
  { name: 'Player 6', teamId: '5', id: '6' },
  { name: 'Player 7', teamId: '6', id: '7' },
];

export const fetchTeams = async () => {
  return new Promise((resolve, reject) => {
    resolve(teams);
  });
};

export const fetchTeam = async (teamId) => {
  return new Promise((resolve, reject) => {
    const team = teams.filter((t) => t.id === teamId);

    if (team.length === 0) {
      reject(`No team found for id ${teamId}`);
    }

    resolve(team[0]);
  })
}

export const fetchPlayers = async (teamId) => {
  return new Promise((resolve, reject) => {
    const teamPlayers = players.filter((p) => p.teamId === teamId);

    if(teamPlayers.length === 0) {
      reject(`No players found for team id ${teamId}`)
    }
    resolve(teamPlayers)
  })
}