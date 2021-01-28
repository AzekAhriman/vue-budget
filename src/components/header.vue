<template>
  <header class="header">
    <div class="header-logo">
      <img class="logo" src="../assets/logo.jpeg" alt="logo">
      <div class="header-logo-text">
        <p class="header-logo-name">Семейный бюджет</p>
        <p class="header-logo-motivation">Иначе мы умрем с голоду...</p>
      </div>
    </div>
    <div class="header-name">
      <h1>{{ this.$route.meta.title ?  this.$route.meta.title : 'State for ' + this.$route.params.date}}</h1>
    </div>
    <div class="header-buttons">
      <div class="header-buttons-left">
        <router-link class="add-expenses" to="/">+ Add expenses</router-link>
      </div>
      <div class="header-buttons-right">
        <router-link class="show-history" to="/history/1">Show history</router-link>
        <router-link class="new-month" to="/edit">New month</router-link>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
   margin: 0;
  }
  .header {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
  }
  .header-name {
    margin-top: 30px;
    text-align: center;
  }
  .header-logo {
    position: absolute;
    left: 40px;
    top: 10px;
    width: 80px;
    display: flex;
    align-items: center;
  }
  .logo {
    width: 80px;
    margin-right: 20px;
  }
  .header-logo-text {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .header-logo-name {
    font-size: 24px;
    font-weight: bold;
  }
  .header-logo-motivation {
    margin-top: 10px;
    font-size: 12px;
    font-style: italic;
  }
  .header-buttons {
    margin-top: 80px;
    padding: 0 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .add-expenses {
    padding: 5px;
    border-radius: 5px;
    background: red;
    color: white;
  }
  .show-history {
    margin-right: 20px;
    text-decoration: underline;
  }
  .new-month {
    padding: 5px;
    border-radius: 5px;
    background: green;
    color: white;
  }
</style>
