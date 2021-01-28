<template>
  <div id="app">
    <div id="nav" v-if="false">
      <router-link to="/">Home</router-link> |
      <router-link to="/edit/1">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
}
body {
  display: flex;
  justify-content: center;
}
#app {
  width: 100%;
  display: flex;
  justify-content: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
