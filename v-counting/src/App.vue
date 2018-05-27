<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body,html {
    padding: 0;
    margin: 0;
    font-size: 15px;
    line-height: 1.4;
  }

  #app {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-height: 100vh;
  }
</style>
