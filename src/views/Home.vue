<template>
  <div class="home">
    <Header/>
    <Dashboard/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import Dashboard from '@/components/dashboard.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Header,
    Dashboard,
    Footer
  },
});
</script>

<style scoped>
  .home {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
