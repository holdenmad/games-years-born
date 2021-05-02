<template>
  <div class="form">
    <h1>{{ msg }}</h1>
    <div>Enter in your birthday</div>
    <div>
      <label>Day</label>
      <input type="text" v-model="day"/>
    </div>
    <div>
      <label>Month</label>
      <input type="text" v-model="month"/>
    </div>
    <div>
      <label>Year</label>
      <input type="text" v-model="year"/>
    </div>

    <input type="submit" value="Submit" v-on:click="submit"/>
  </div>
</template>

<script>
export default {
  name: "Form",

  props: {
    msg: String
  },

  data() {
    return {
      day: '',
      month: '',
      year: '',
    }
  },

  methods: {
    submit() {
      console.log(this.day, this.month, this.year);

      this.day = '';
      this.month = '';
      this.year = '';
    }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
