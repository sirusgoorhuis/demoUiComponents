<template>
  <div class="leftColumn">
    <div class="wrapper">
      <img class="logo" src="../assets/logo.svg" />
      <input class="searchbar" v-model="search" placeholder="Search" type="text" />
    </div>
    <ul>
      <transition-group name="list" enter-active-class="animated fadeInLeft">
        <li
          v-bind:class="index === indexComponent ? 'active' : ''"
          @click="setActive(indexComponent)"
          v-for="(component, indexComponent) in filteredComponents"
          :key="component.id"
        >{{component.title}}</li>
      </transition-group>
    </ul>
  </div>
</template>

<script>

export default {
  name: "LeftColumn",
  props: {
    msg: String
  },

  data: function() {
    return {
      components: [
        { id: 1, title: "Asset tree" },
        { id: 2, title: "Asset Viewer" },
        { id: 3, title: "Attribute input" },
        { id: 4, title: "Header" },
        { id: 5, title: "Icon" },
        { id: 6, title: "Input" },
        { id: 7, title: "Map" },
        { id: 8, title: "Rules editor" },
        { id: 9, title: "Select" },
        { id: 10, title: "Smart notify" },
        { id: 11, title: "Thermostat" },
        { id: 12, title: "Timeline" },
        { id: 13, title: "Translat" },
        { id: 14, title: "Rest" },
        { id: 15, title: "Asset tree" },
        { id: 16, title: "Asset Viewer" },
        { id: 17, title: "Attribute input" },
        { id: 18, title: "Header" },
        { id: 19, title: "Icon" },
        { id: 20, title: "Input" },
        { id: 21, title: "Map" },
        { id: 22, title: "Rules editor" },
        { id: 23, title: "Select" },
        { id: 24, title: "Smart notify" },
        { id: 25, title: "Thermostat" },
        { id: 26, title: "Timeline" },
        { id: 27, title: "Translat" },
        { id: 28, title: "Rest" }
      ],

      index: 0,
      search: ''

     
    };
  },

  computed: {

    filteredComponents: function(){
      return this.components.filter((component) => {

          return component.title.match(this.search);

      }) 
    }

  },

  methods: {
    setActive(index) {
      this.index = index;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";


::-webkit-scrollbar{

  display: none;
}

.leftColumn {
  width: 25vw;
  height: 100vh;
  background-color: #1c1c1c;
  box-shadow: 7px 0 30px 0 rgba(0, 0, 0, 0.5);
  float: left;
  position: relative;
  z-index: 10;
  overflow-y: scroll;
  overflow-x: hidden;

}

ul {
  list-style-type: none;
  margin-left: 0;
  margin-top: 30vh;
  z-index: 1;
}

li {
  background-color: #1c1c1c;
  border-left-style: solid;
  border-left-color: #519c36;

  color: white;
  padding-left: 20px;
  margin-bottom: 15px;
  font-size: 1.2vw;
  cursor: pointer;
}

.active {
  border-left-color: #c4d42c;
  font-weight: bold;
}

.logo {
  margin-left: 2vw;
  margin-top: 3.2vh;
  width: 15vw;
  position: fixed;
  float: left;
}

.searchbar {
  height: 8vh;
  width: 20vw;
  position: fixed;
  margin-left: 2vw;
  float: left;
  overflow: hidden;
  border-style: none;
  outline-style: none;
  margin-top: 15vh;
  padding-left: 15px;
  background: rgba(34, 34, 34);
  border-radius: 0.7vw;
  font-family: HelveticaNeue-Light;
  font-size: 1.5vw;
  color: rgba(160, 160, 160);
}

.wrapper {
  background-color: #1c1c1c;
  height: 25vh;
  width: 25vw;
  z-index: 100;
  float: left;
  position: fixed;
}
</style>
