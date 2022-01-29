// 1. Click on login button 
// 2. Redirect to Spotify login page
// 3. Redirect to home page once logged in
export const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "9f974c1f6ecb43a18ea0159fe70e6dd6";
const redirectUri = "http://localhost:3000/";

// https://developer.spotify.com/documentation/general/guides/authorization/scopes/
const scopes = [
  // "user-read-currently-playing",
  // "user-read-recently-played",
  // "user-read-playback-state",
  // "user-top-read",
  // "user-modify-playback-state"
  "user-read-playback-position",
  "user-read-email",
  "user-library-read",
  "user-top-read",
  "user-follow-read",
  "user-read-playback-state",
  "playlist-read-collaborative",
];

// http://localhost:3000/
// #access_token = BQBajzal3Jg19MJrpQ9_tYJ0YOP4wqdlXgdC - H6iyvY5AaUzt1LJkpZIgKybYN2XazFcE - cJqjpqzJ38rxqA8eGYhiw_N667ptMnt4tmYUG76TaVJ6ydhpn5wFkLaRfp7wfMDOT2IK44pZIF7fg1QBYbPyn8YZ1kAC8g_EKMKZOmngwJ 
// & token_type=Bearer 
// & expires_in=3600
export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1) //give me the first hash
    .split("&") //leave the query parameters after my hash that start with &
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {}); // initial will be empty at first
};
// the above function will return this
// { access_token: 'BQAdQpE4RN9Dd4FvqYJK3m9ldlnj8wTAv2B5nRIx5w4_k-ZXWh…t0PD6SIAqYULv0KOv7jJKtmHfXLFoCFmN2aeLwSt4usy23rUt', 
// token_type: 'Bearer', 
// expires_in: '3600' }

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
