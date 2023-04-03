import { createApp } from 'vue'
import App from './App.vue'
import routers from './routers'  // router import
import './style/home.css';
import './style/tailwind.css';
const app = createApp(App)
app.use(routers)  // router 추가
app.mount('#app')