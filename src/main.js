import Vue from 'vue'
import App from './App.vue'
import Prompter from './components/Prompter.vue'
import ListElement from './components/Element.vue'
import Footer from './components/Footer.vue'

Vue.component('app-element', ListElement)
Vue.component('app-prompter', Prompter)
Vue.component('app-footer', Footer)

new Vue({
  el: '#app',
  render: h => h(App)
})
