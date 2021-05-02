import axios from "axios";

// Variables for Twitch Authorization
const client_id = process.env.VUE_APP_CLIENT_ID;
const client_secret = process.env.VUE_APP_CLIENT_SECRET;
const grant_type = "client_credentials";
const cors_server = "https://games-years-born.herokuapp.com/";

// Get access token from Twitch Dev Account
export async function getAccessToken() {
  try {
    const response = await axios.post(
      `https://id.twitch.tv/oauth2/token?client_id=${client_id}&client_secret=${client_secret}&grant_type=${grant_type}`
    );
    const data = await response.data.access_token;

    return data;
  } catch (error) {
    console.log("Error: ", error);
  }
};

// Call Games from API
export function getGames(accessToken) {
  return axios({
    url: `${cors_server}https://api.igdb.com/v4/games`,
    method: 'POST',
    headers: {
        'Accept': 'application/JSON',
        'Client-ID': client_id,
        'Authorization': `Bearer ${accessToken}`,
    },
    data: "fields *;",
  })
  .then(res => {
    return res.data;
  })
  .catch(error => {
    console.error(error);
  });
};

/* 
Release Date has its own endpoint
We want to call this endpoint with a parameter of 'date' to search for games with this release date
Format: Unix Time Stamp

*/