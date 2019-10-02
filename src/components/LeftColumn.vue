<template>
  <div class="leftColumn">
    <img class="logo" src="../assets/logo.svg" />

    <ul>
      <transition-group name="list" enter-active-class="animated fadeInLeft">
        <li
          v-bind:class="index === indexComponent ? 'active' : ''"
          @click="setActive(indexComponent)"
          v-for="(component, indexComponent) in components"
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
        { id: 14, title: "Rest" }
      ],

      index: 0
    };
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

.leftColumn {
  width: 25%;
  height: 100vh;
  background-color: #1c1c1c;
  box-shadow: 7px 0 30px 0 rgba(0, 0, 0, 0.5);
  position: fixed;
}

ul {
  list-style-type: none;
  
  margin-top: 50%;
  cursor: pointer;
}

li {
  background-color: #1c1c1c;
  border-left-style: solid;
  border-left-color: #519c36;
  margin-left: 15px;
  color: white;
  padding-left: 15px;
  margin-bottom: 15px;
  font-size: 170%;
}

.active {
  border-left-color: #c4d42c;
  font-weight: bold;
}

.logo {
  margin-left: 20px;
  margin-top: 20px;
  width: 45%;
}
</style>
