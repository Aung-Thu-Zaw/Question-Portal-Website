import { createRouter, createWebHistory } from "vue-router";
import PostIndex from "../views/posts/Index.vue";
import PostCreate from "../views/posts/Create.vue";
import PostEdit from "../views/posts/Edit.vue";
import PostDetails from "../views/posts/Details.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: PostIndex,
    },
    {
        path: "/questions/ask",
        name: "post.create",
        component: PostCreate,
    },
    {
        path: "/questions/:id/edit",
        name: "post.edit",
        component: PostEdit,
    },
    {
        path: "/questions/:id",
        name: "post.details",
        component: PostDetails,
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
