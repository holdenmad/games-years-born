import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import corsAnywhere from "./corsanywhere";

require("dotenv").config();

Vue.config.productionTip = false;

// Twitch Authentication
// https://id.twitch.tv/oauth2/token?client_id=abcdefg12345&client_secret=hijklmn67890&grant_type=client_credentials

const client_id = process.env.VUE_APP_CLIENT_ID;
const client_secret = process.env.VUE_APP_CLIENT_SECRET;
const grant_type = "client_credentials";
const cors_server = "https://games-years-born.herokuapp.com/";

// Get access token from Twitch Dev Account
async function getAccessToken() {
  axios
    .post(
      `https://id.twitch.tv/oauth2/token?client_id=${client_id}&client_secret=${client_secret}&grant_type=${grant_type}`
    )
    .then(function (response) {
      console.log(response);
      return response.access_token;
    })
    .catch(function (error) {
      console.log(error);
    });
}

const access_token = getAccessToken();

// Call Games from API
// Need to do Cors Anywhere request here
async function getGames() {
  axios
    .post(cors_server + "https://api.igdb.com/v4/games", {
      headers: {
        "Client-ID": process.env.VUE_APP_CLIENT_ID,
        Authorization: `Bearer ${access_token}`
      }
    })
    .then(res => {
      console.log(res.data);
    })
    .catch(error => {
      console.error(error);
    });
}

const allGames = getGames();

new Vue({
  render: h => h(App)
}).$mount("#app");
