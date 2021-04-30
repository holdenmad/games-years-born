import axios from "axios";
// import corsAnywhere from "./corsanywhere";

// Variables for Twitch Authorization
const client_id = process.env.VUE_APP_CLIENT_ID;
const client_secret = process.env.VUE_APP_CLIENT_SECRET;
const grant_type = "client_credentials";
const cors_server = "https://games-years-born.herokuapp.com/";

// Get access token from Twitch Dev Account
// async function getAccessToken() {
//   axios
//     .post(
//       `https://id.twitch.tv/oauth2/token?client_id=${client_id}&client_secret=${client_secret}&grant_type=${grant_type}`
//     )
//     .then(function(response) {
//       console.log(response);
//       return response.data.access_token;
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
// }

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
export async function getGames(accessToken) {
  axios({
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
    console.log(res.data);
    return res.data;
  })
  .catch(error => {
    console.error(error);
  });
};