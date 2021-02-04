<template>
  <div id="app">
    <router-view :key="this.$route.path"/>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
}

html {
  position: relative;
  min-height: 100vh;
}

body {
  display: flex;
  justify-content: center;
  min-height: 100vh;
}

#app {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
