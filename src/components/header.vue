<template>
  <header class="header">
    <router-link class="header-logo" to="/">
      <img class="logo" src="../assets/logo.jpeg" alt="logo">
      <div class="header-logo-text">
        <p class="header-logo-name">Family budget</p>
        <p class="header-logo-motivation">Else we starve to death...</p>
      </div>
    </router-link>
    <div class="header-name">
      <h1 v-if="this.$route.name === 'Home' || this.$route.name === 'Create'">{{ this.$route.meta.title }}</h1>
      <h1 v-if="this.$route.name === 'History'">{{ this.$route.meta.title + ' ' + this.$route.params.date }}</h1>
      <h1 v-if="this.$route.name === 'Edit'">{{ 'State for ' + this.$route.params.date }}</h1>
    </div>
    <div class="header-buttons">
      <div class="header-buttons-left">
        <router-link v-if="this.$route.name === 'History'" class="add-expenses" :to="'/edit/' + this.$route.params.date">+ Add expenses</router-link>
        <router-link v-if="this.$route.name === 'Home'" class="add-expenses" :to="'/edit/' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear()">+ Add expenses</router-link>
        <button v-if="this.$route.name === 'Edit' || this.$route.name === 'Create'" @click="saveChanges">Save</button>
        <button v-if="this.$route.name === 'Edit' || this.$route.name === 'Create'" @click="cancelChanges">Cancel</button>
      </div>
      <div class="header-buttons-right">
        <div class="show-history">
          <p @click="dropdownOpen = !dropdownOpen">Show history</p>
          <div v-if="dropdownOpen" class="show-history-dropdown">
            <router-link v-for="(item, index) in historyList" :key="index" :to="'/history/' + item">{{ item }}</router-link>
          </div>
        </div>
        <router-link class="new-month" to="/create">Next month +</router-link>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from "axios";

export default Vue.extend({
  name: 'Header',
  data() {
    return {
      dropdownOpen: false,
      historyList: [] as Array<string>
    }
  },
  methods: {
    saveChanges() {
      this.$emit('saveChanges');
    },
    cancelChanges() {
      this.$emit('cancelChanges');
    },
  },
  created() {
    axios.get('http://localhost:3000/api/records/')
        .then((response: Record<string, any>) => {
          this.historyList = response.data.map((item: { id: string }) => item.id)
          console.log(response.data);
        })
        .catch((error: any) => {
          console.log(error);
        })
  },
});
</script>

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
  top: 12px;
  display: flex;
  align-items: center;
  color: black;
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

.header-buttons-left {
  display: flex;
}

.header-buttons-right {
  display: flex;
  align-items: center;
}

.add-expenses {
  padding: 5px;
  border-radius: 5px;
  background: red;
  color: white;
}

.show-history {
  margin-right: 20px;
  position: relative;
  cursor: pointer;
}

.show-history-dropdown {
  cursor: default;
  position: absolute;
  top: 25px;
  left: 4px;
  z-index: 999;
  display: flex;
  text-align: center;
  flex-direction: column;
  background: azure;
  border: 1px solid black;
  border-radius: 5px;
  width: 90px;
  padding: 10px;
  font-size: 14px;
  height: 120px;
  overflow: auto;
}

.show-history-dropdown a {
  margin-top: 10px;
  text-decoration: underline;
}

.show-history-dropdown a:first-of-type {
  margin-top: 0;
}

.new-month {
  padding: 5px;
  border-radius: 5px;
  background: green;
  color: white;
}
</style>
