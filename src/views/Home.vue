<template>
  <div class="home">
    <Header/>
    <Dashboard/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/components/header.vue';
import Dashboard from '@/components/dashboard.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Header,
    Dashboard,
  },
});
</script>

<style scoped>
  .home {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>
