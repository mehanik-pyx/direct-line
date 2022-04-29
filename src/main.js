import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
const AUTH_TOKEN = 'Bearer BT3HK2NpCnyrKiDo'

axios.defaults.headers.post['authorization'] = AUTH_TOKEN;

createApp(App).mount('#app')
