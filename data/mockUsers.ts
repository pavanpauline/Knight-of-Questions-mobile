export type User = {
  id: string;
  name: string;
  score: number;
  rankTitle: string;
  rankPosition: number;
  avatarColor: string; // fallback for mock
  gemColor: string;
};

export const MOCK_USERS: User[] = [
  { id: '1', name: 'ELORIA', score: 19000, rankTitle: 'Cavaleiro Mestre', rankPosition: 1, avatarColor: '#A8CBB8', gemColor: '#4A90E2' },
  { id: '2', name: 'MARIA', score: 16000, rankTitle: 'Cavaleiro', rankPosition: 2, avatarColor: '#A8CBB8', gemColor: '#27AE60' },
  { id: '3', name: 'EDMUND', score: 14000, rankTitle: 'Cavaleiro', rankPosition: 3, avatarColor: '#A8CBB8', gemColor: '#E74C3C' },
  { id: '4', name: 'MARIA', score: 9000, rankTitle: 'Escudeiro', rankPosition: 4, avatarColor: '#E8F5E9', gemColor: '#9B59B6' },
  { id: '5', name: 'ARTHUR', score: 8500, rankTitle: 'Escudeiro', rankPosition: 5, avatarColor: '#E8F5E9', gemColor: '#9B59B6' },
  { id: '6', name: 'JOAN', score: 7200, rankTitle: 'Aprendiz', rankPosition: 6, avatarColor: '#E8F5E9', gemColor: '#9B59B6' },
];

export const CURRENT_USER: User = {
  id: '99',
  name: 'GABRIEL B.',
  score: 2000,
  rankTitle: 'Sr. Cavaleiro',
  rankPosition: 34,
  avatarColor: '#2B4A34',
  gemColor: '#F39C12'
};
