import {createApp} from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import '../css/app.css'
import vuetify from './vuetify'

const pinia = createPinia();

createApp(App).use(pinia).use(router).use(vuetify).mount("#app");