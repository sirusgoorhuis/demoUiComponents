<template>
  <div id="app">
    <ContentBox />
  </div>
</template>

<script>
import ContentBox from '@/components/ContentBox.vue';
export default {
  name: 'content',
  components: {
    ContentBox,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Space+Mono&display=swap');

body {
  position: fixed;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  body {
  padding: 0px;
  margin: 0px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
