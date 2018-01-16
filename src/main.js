// main.js

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import Home from './components/home/Home.vue'
import About from './components/about/About.vue'
import Contact from './components/contact/Contact.vue'
import Profile from './components/profile/Profile.vue'

Vue.use(VueRouter)
Vue.use(VueMaterial)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/profile', component: Profile }
  ]
})

new Vue({
  router,
  template: `
    <div id="app" class="container">
      <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">
      <div class="navigation">
          <md-list>
            <md-list-item>
              <md-avatar class="md-avatar-icon">
                <md-icon>home</md-icon>
              </md-avatar>
              <span class="md-list-item-text"><router-link to="/">Home</router-link></span>
            </md-list-item>

            <md-list-item>
                <md-avatar>
                    <img src="src/assets/download.jpg" alt="Avatar">
                </md-avatar>
                <span class="md-list-item-text"><router-link to="/profile">My Profile</router-link></span>
            </md-list-item>

            <md-list-item>
              <md-icon>send</md-icon>
              <span class="md-list-item-text"><router-link to="/about">About</router-link></span>
            </md-list-item>

            <md-list-item>
              <md-icon>delete</md-icon>
              <span class="md-list-item-text"><router-link to="/contact">Contact</router-link></span>
            </md-list-item>

          </md-list>
        </div>
      <router-view></router-view>
    </div>
  `
}).$mount('#app')
