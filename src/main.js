import { createApp } from 'vue'
import App from './App'
import router from './router'
import InlineSvg from 'vue-inline-svg';


createApp(App).use(router).component('inline-svg', InlineSvg).mount('#app')
