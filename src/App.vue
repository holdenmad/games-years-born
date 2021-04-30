<template>
  <div id="app">
    <Header />
    <img alt="Vue logo" src="./assets/logo.png" />
    <Loader />
    <Form msg="When were you born?" />
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

  // data: {
    
  // },

  async mounted() {
    let accessToken = await getAccessToken();
    console.log("Got access token: " + accessToken);
    let games = await getGames(accessToken);
    console.log("Got games: " + games);
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
