import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import routers from './routers'  // router import
import './style/home.css';
import './style/tailwind.css';



import { MotionPlugin } from '@vueuse/motion'



const app = createApp(App)
app.use(MotionPlugin);
app.use(routers) ;
app.mount('#app');