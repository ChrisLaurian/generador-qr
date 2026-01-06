<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">-->
  
  <QrComponent></QrComponent>
</template>

<script>

import QrComponent from './components/QrComponent.vue';

export default {
  name: 'App',
  components: {
    QrComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
