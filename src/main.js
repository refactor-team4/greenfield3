import { createApp } from 'vue' 
import App from './App.vue' 
import {createRouter , createWebHashHistory} from 'vue-router'
 import Product from './components/Product.vue'
  import HomePage from './components/HomePage.vue'
//    import Login from './components/Login.vue'  
   const routes = [  
        { path: "/", name: "HomePage", component: HomePage },  
    { path: "/Product", name: "product", component: Product }  
    //  { path: "/login", name: "Login", component: Login } 
    ];
       const router = createRouter({   history: createWebHashHistory(process.env.BASE_URL),   routes, });
         createApp(App).use(router).mount("#app")