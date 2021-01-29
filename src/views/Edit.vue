<template>
  <div class="edit">
    <Header/>
    <Editor/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import Editor from '@/components/editor.vue';

export default Vue.extend({
  name: 'Edit',
  components: {
    Header,
    Editor,
    Footer
  },
});
</script>

<style scoped>
  .edit {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
