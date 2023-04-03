import { createWebHistory, createRouter } from "vue-router";



import pageHome from '../components/pageHome.vue';
import AboutPage from '../discover/AboutPage.vue';


const routes = [

    {
        path: "/",
        component: pageHome,
    },
    {
        path: "/about",
        component: AboutPage,
    },  
    // {
    //     path: "/blog",
    //     component: Blog,
    // },
    // {
    //     path: "/login",
    //     component: Login,
    // },
    // {
    //     path: "/signup",
    //     component: Signup,
    // },
    // {
    //     path: "/upload",
    //     component: Upload,
    // },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;