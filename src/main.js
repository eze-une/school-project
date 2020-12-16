import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
<<<<<<< HEAD
// import './icons.js'

createApp(App).use(router).mount('#app')
=======
import store from './store'

createApp(App).use(store).use(router).mount('#app')
>>>>>>> 5fa7dadf1b836dfa17b8001bb0dc163fed64d2c7
