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
      <h1>{{ this.name }}</h1>
    </div>
    <div class="header-buttons">
      <div class="header-buttons-left">
        <my-button red size="small" @onClick="addExpenses" label="+ Add expenses" v-if="!this.edit" />
        <my-button green size="small" @onClick="saveChanges" label="Save" v-if="this.edit" />
        <my-button red size="small" @onClick="cancelChanges" label="Cancel" v-if="this.edit" />
      </div>
      <div class="header-buttons-right">
        <my-button green size="small" @onClick="nextMonth" label="Next month +"/>
      </div>
    </div>
  </header>
</template>

<script>
import './header.css';
import MyButton from './Button.vue';

export default {
  name: 'my-header',

  components: { MyButton },

  props: {
    edit: {
      type: Boolean,
    },
    name: {
      type: String,
    },
  },

  methods: {
    addExpenses() {
      this.$emit('addExpenses');
    },
    saveChanges() {
      this.$emit('saveChanges');
    },
    cancelChanges() {
      this.$emit('cancelChanges');
    },
    nextMonth() {
      this.$emit('nextMonth');
    },
  },
};
</script>
