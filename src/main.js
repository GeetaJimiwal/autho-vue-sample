import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Cloudinary from "cloudinary-vue"
import store from  "./store";
// Import the Auth0 configuration
import { domain, clientId } from "../auth_config.json";  
import { Auth0Plugin } from './auth';
// Import the plugin here
// import { Auth0Plugin } from "./auth";
// Install the authentication plugin here
  Vue.use(Auth0Plugin, {
    domain,
    clientId,
    onRedirectCallback: appState => {
      router.push(
        appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
      );
    }
  });

Vue.use(Cloudinary, {
  configuration: { 
   cloudName: "moerayo",
   secure: true 
  }
 });
  new Vue({
    router,
    store,
    clientId,
    domain,
    render: h => h(App),
  }).$mount('#app')

Vue.config.productionTip = false

