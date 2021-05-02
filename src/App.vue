<template>
  <div id="app">
    <!-- <Header /> -->
    <img class="banner" alt="Same Game Twin Banner" src="./assets/10.png" />
    
    <Loader />
    
    <div class="gradient-border">
      <div class="component">
        <Form msg="When were you born?" />
      </div>
    </div>
    
    <div class="gradient-border">
      <div class="component">
        <div>Game Name: {{this.games[0].name}}</div>
        <div>Platform: </div>
        <div>Release Date: {{convertToHumanDate(this.games[0].first_release_date)}}</div>
      </div>
    </div>
    
    <Footer />
    <div></div>
  </div>
</template>

<script>
// Imports
import Form from "./components/Form.vue";
import Footer from "./components/Footer.vue";
import Loader from './components/Loader.vue';
import { getAccessToken, getGames } from "./api_requests";

export default {
  name: "App",
  components: {
    Form,
    Footer,
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

.gradient-border {
  width: 90%;
  margin: 1rem;
  padding: 5px;
  background: rgb(28,203,227);
  background: -moz-linear-gradient(99deg, rgba(28,203,227,1) 0%, rgba(125,45,253,1) 100%);
  background: -webkit-linear-gradient(99deg, rgba(28,203,227,1) 0%, rgba(125,45,253,1) 100%);
  background: linear-gradient(99deg, rgba(28,203,227,1) 0%, rgba(125,45,253,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1ccbe3",endColorstr="#7d2dfd",GradientType=1); 
}

.component {
  background: white;
  color: black;
  padding: 2rem;
}

#app {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.banner {
  width: 90%;
  max-width: 800px;
}
</style>
