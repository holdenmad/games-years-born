<template>
  <div id="app">
    <Header />
    <img alt="Vue logo" src="./assets/logo.png" />
    <Loader />
    <Form msg="When were you born?" />
    <div>
      <div>Game Name: {{this.games[0].name}}</div>
      <div>Platform: </div>
      <div>Release Date: {{convertUnixDate(this.games[0].first_release_date)}}</div>
    </div>
    
    <div>Footer component</div>
    <div></div>
  </div>
</template>

<script>
// Imports
import Form from "./components/Form.vue";
import Header from "./components/Header.vue";
import Loader from './components/Loader.vue';
import { getAccessToken, getGames } from "./api_requests";

export default {
  name: "App",
  components: {
    Form,
    Header,
    Loader,
  },

  data() {
    return {
      games: null,
      accessToken: '',
    }
  },

  methods: {
    convertToHumanDate(unixDate) {
      let date = new Date(unixDate);
      return date.toLocaleDateString()
    },

    convertToUnixDate(dateString) {
      return Date.parse(dateString)/1000;
    }
  },

  // Calling data from IGDB
  async mounted() {
    this.accessToken = await getAccessToken();
    this.games = await getGames(this.accessToken);
    console.log(this.games);
  },

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
