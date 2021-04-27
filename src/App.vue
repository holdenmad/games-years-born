<template>
  <div id="app">
    <Header />
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="When were you born?" />
    <div>Footer component</div>
    <div></div>
  </div>
</template>

<script>
// Imports
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";
import { getAccessToken, getGames } from "./api_requests";

export default {
  name: "App",
  components: {
    HelloWorld,
    Header,
  },

  // data: {
    
  // },

  async mounted() {
    let accessToken = await getAccessToken();
    console.log("Got access token: " + accessToken);
    let games = await getGames();
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
