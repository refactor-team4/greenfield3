import { createApp } from 'vue'
import App from './App.vue'
import {createRouter , createMemoryHistory} from 'vue-router'
import HomePage from './components/HomePage.vue'
import Login from './components/Login.vue'
import Events from './components/Events.vue'
import Products from './components/Products.vue'
import Blogs from './components/Blogs.vue'
import Singleblog from './components/Singleblog.vue'
import Signup from './components/Signup.vue'
import AdminLogin from './components/AdminLogin.vue'
import ProductsAdmin from './components/ProductsAdmin.vue'
import EventsAdmin from './components/EventsAdmin'
import editprofile from './components/editprofile.vue'
import myprofile from './components/myprofile.vue'

const routes = [

    { path: "/", name: "HomePage", component: HomePage },
    { path: "/login", name: "Login", component: Login },
    { path: "/events", name: "Events", component: Events },
    { path: "/Products", name: "Products", component: Products },
    { path: "/blogDetails/:id/:userId/:ConnectedId", name: "Singleblog", component: Singleblog },
    { path: "/signup", name: "Signup", component: Signup },
    { path: "/ProductsAdmin", name: "ProductsAdmin", component: ProductsAdmin },
    { path: "/blogs", name: "Blogs",props:true,meta:{title : "Blogs"}, component: Blogs},


  { path: "/EventsAdmin", name: "HomePage", component: EventsAdmin },

 




  { path: "/admin", name: "Admin", component: AdminLogin},
{
      path: "/ProductsAdmin",
      name: "ProductsAdmin",
      props: true,
      meta: { title: "ProductsAdmin" },
      component: ProductsAdmin
    },

    { path: "/myprofile", name: "myprofile", component: myprofile},
    { path: "/editprofile", name: "editprofile", component: editprofile}
  

];


const router = createRouter({
    history: createMemoryHistory(process.env.BASE_URL),
    routes,
});

createApp(App).use(router).mount("#app");
