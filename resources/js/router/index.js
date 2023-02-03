import { createRouter, createWebHistory } from "vue-router";
import PostView from "../views/posts/Index.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: PostView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
