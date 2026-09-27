import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHashHistory } from 'vue-router'

// Import the views for the routes
import Home from './views/Home.vue'
import About from './views/About.vue'

// Define the routes for the application
const routes = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
  
    routes: [
        {
        path: '/',
        name: 'home',
        component: Home
        },
        {
        path: '/about',
        name: 'about',
        component: About
        }
    ]
    })
// Create the Vue application instance
const app = createApp(App)

// Use the router in the application
app.use(routes)

// Mount the application to the DOM
app.mount('#app')
