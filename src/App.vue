<template>
  <div id="app">
    <nav>
    <NavBarPage/>
    </nav>
    <router-view/>
  </div>
</template>


<script>
// import { defineComponent } from '@vue/composition-api'
import NavBarPage from "./components/NavBarPage";
 
 
export default {
  components: {
   NavBarPage,
  },
  data() {
    return {
      clientId: process.env.VUE_APP_AUTHO_CONFIG_CLIENTID
    }
    
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
