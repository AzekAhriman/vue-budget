<template>
  <footer class="footer">
    <img src="" alt="">
    <div class="footer-link">
      <a href="#">Privacy policy</a>
      <a href="#">User agreement</a>
    </div>
    <p class="footer-year">© 2021</p>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Footer',
});
</script>

<style scoped>
  .footer {
    margin-top: 50px;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 30px 0;
    background: #000;
    color: white;
    font-size: 14px;
  }
  .footer-link a {
    color: white;
    text-decoration: underline;
  }
  .footer-link a:first-of-type {
    margin-right: 20px;
  }
  .footer-year {
    margin-top: 20px;
  }
</style>
