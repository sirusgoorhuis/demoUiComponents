<template>
  <div id="app">
    <LeftColumn />
  </div>
</template>

<script>
import LeftColumn from "./components/LeftColumn.vue";
export default {
  name: "left",
  components: {
    LeftColumn
  },
};
</script>



<style>

body{
  margin: 0;
  background-color: #1F2224;
  position: fixed;
  overflow: hidden;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;


}


#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
