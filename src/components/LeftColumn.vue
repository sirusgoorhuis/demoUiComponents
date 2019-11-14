@Component({
  template: '
  <template>
  <div class="leftColumn">
    <div class="wrapper">
      <img class="logo" src="../assets/logo.svg" />
      <input v-model="search" class="searchbar" placeholder="Search" type="text" />
    </div>


<!-- listview for the getting started components. Also only shows the filtered components 
      when the user searches in the searchfield -->
    <ul v-bind:class="filteredStarted < 1 ? 'hidden' : 'categories'">
      Getting Started
      <li
        v-bind:class="index === indexElement ? 'active' : ''"
        @click="setActive(indexElement)"
        class="item"
        v-for="(element, indexElement) in filteredStarted"
        :key="element.id"
      >{{element.title}}</li>
    </ul>


<!-- listview for the UIcomponents. Also only shows the filtered components 
      when the user searches in the searchfield -->

    <ul v-bind:class="filteredComponents < 1 ? 'hidden' : 'categories'">
      Components
      <li
        v-bind:class="index === indexElement ? 'active' : ''"
        @click="setActive(indexElement)"
        class="item"
        v-for="(element, indexElement) in filteredComponents"
        :key="element.id"
      >{{element.title}}</li>
    </ul>

    <!--
      <ul class="secondIndent">
        <transition-group name="list" enter-active-class="animated fadeInLeft">
          <li
            class="componentItem"
            v-bind:class="index === indexComponent ? 'active' : ''"
            @click="setActive(indexComponent)"
            v-for="(component, indexComponent) in filteredComponents"
            :key="component.id"
          >{{component.title}}</li>
        </transition-group>
    </ul>-->
  </div>
</template>'
})

<script>
export default {
  name: "LeftColumn",
  props: {
    msg: String
  },


//The data function for the leftcolumn component. This function stores all the components id and title
  data: function() {
    return {

      //Array for the gettingstarted components
      gettingStarted: [
        { id: 28, title: "About OpenRemote" },
        { id: 29, title: "Introduction" },
        { id: 30, title: "Installation" }
      ],

      //Arrar for the UIcomponents
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
        { id: 27, title: "Translat" }
      ],



      index: 0,
      search: ""
    };
  },


//Computed function which stores variables that are computed in the document
  computed: {

    //filteredStarted is a function that compute the variable element. This function is called when the 
    //user is typing in the searchbar. The variable element.title is used to display in the listview
    filteredStarted: function() {
      return this.gettingStarted.filter(element => {
        return element.title.toLowerCase().match(this.search);
      });
    },

    //filteredComponents is a function that compute the variable element. This function is called when the 
    //user is typing in the searchbar. The variable element.title is used to display in the listview
    filteredComponents: function() {
      return this.components.filter(element => {
        return element.title.toLowerCase().match(this.search);
      });
    }
  },


//A method that is called when the user clicks on a specific component in the listview. The component sets its class to active.
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

::-webkit-scrollbar {
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
  position: relative;
}

.categories {
  list-style-type: none;
  margin-left: -1vw;
  z-index: 1;
  color: white;
  font-size: 2vw;
  font-family: HelveticaNeue-Bold;
  margin-top: 30vh;
  margin-bottom: -24vh;
  text-align: left;

}

.hidden{
  display: none;
}

.categories > :first-child {
  margin-top: 3vh;
}

.categories > :last-child {
  margin-bottom: 4vh;
}

.item {
  background-color: transparent;
  border-left-style: solid;
  border-left-color: #519c36;

  color: white;
  padding-left: 20px;
  margin-bottom: 1.5vh;
  margin-left: 2vw;
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
