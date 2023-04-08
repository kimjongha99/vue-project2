import { createWebHistory, createRouter } from "vue-router";



import pageHome from '../components/pageHome.vue';
import PageAbout from '../discover/PageAbout.vue';
import LoginPage from "@/discover/LoginPage.vue";
import SignUpPage from "@/discover/SignUpPage.vue";

const routes = [

    {
        path: "/",
        component: pageHome,
    },
    {
        path: "/about",
        component: PageAbout,
    },  
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage
      },
      {
        path: '/signup',
        name: 'SignUp',
        component: SignUpPage
      }
   
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