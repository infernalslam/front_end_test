import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
var VueResource = require('vue-resource')
import '../node_modules/semantic-ui/dist/semantic.min.css'
import 'semantic'
Vue.use(VueRouter)
Vue.use(VueResource)
var router = new VueRouter()
router.map({
  '/': {
    component: App
  }
})
router.start(App, '#app')
