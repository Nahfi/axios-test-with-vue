import { createRouter, createWebHistory } from "vue-router";
import homeComponentVue from "./components/homeComponent.vue";
import createPostComponentVue from "./components/create-postComponent.vue";
import postComponentVue from "./components/postComponent.vue";
import notFoundVue from "./components/not-found.vue";
import postItemVue from "./components/post-item.vue";


const routes = [{
        name: 'home',
        path: '/',
        component: homeComponentVue
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: notFoundVue
    },
    {
        name: 'post',
        path: '/post',
        component: postComponentVue,
        children: [{
            name: 'postIteam',
            path: ':id',
            component: postItemVue,
            props: true
        }]

    },

    {
        name: 'postCreate',
        path: '/post/create',
        component: createPostComponentVue
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router