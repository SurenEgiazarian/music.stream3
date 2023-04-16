import getCookie from './getCookie';

export const checkFavoriteTrack = (arr) => {
  const cookieUsername = getCookie('username');

 return !!arr?.find(({ username }) => username === cookieUsername);
};