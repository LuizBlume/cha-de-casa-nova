import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist  from 'pinia-plugin-persist';
import App from './App.vue'
import router from './router'

const pinia = createPinia()
pinia.use(piniaPersist)

const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')