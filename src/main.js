import { createApp } from 'vue'
import App from './App.vue'
import {createRouter , createWebHashHistory} from 'vue-router'
import HomePage from './components/HomePage.vue'
import Login from './components/Login.vue'
import Events from './components/Events.vue'
import Products from './components/Products.vue'
import Blogs from './components/Blogs.vue'
import Singleblog from './components/Singleblog.vue'
import Signup from './components/Signup.vue'
import AdminLogin from './components/AdminLogin'

const routes = [
  { path: "/", name: "HomePage", component: HomePage },
  { path: "/login", name: "Login", component: Login },
  { path: "/events", name: "Events", component: Events},
  { path: "/products", name: "Products", component: Products},
  { path: "/blogs", name: "Blogs", component: Blogs},
  { path: "/singleblog", name: "Singleblog", component: Singleblog},
  { path: "/signup", name: "Signup", component: Signup},
  { path: "/admin", name: "Admin", component: AdminLogin}

];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

createApp(App).use(router).mount("#app")
