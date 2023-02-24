import { createRouter, createWebHistory } from "vue-router";

import AppLayout from "../layouts/App.vue";
import GuestLayout from "../layouts/Guest.vue";
import Home from "../views/Home.vue";
import QuestionIndex from "../views/questions/Index.vue";
import QuestionCreate from "../views/questions/Create.vue";
import QuestionEdit from "../views/questions/Edit.vue";
import QuestionDetails from "../views/questions/Details.vue";
import TagIndex from "../views/tags/Index.vue";
import UserIndex from "../views/users/Index.vue";
import Register from "../views/auth/Register.vue";
import Login from "../views/auth/Login.vue";

const routes = [
    {
        path: "/",
        component: AppLayout,
        children: [
            {
                path: "",
                name: "home",
                component: Home,
            },
            {
                path: "questions",
                name: "questions.index",
                component: QuestionIndex,
                // props: (route) => ({
                //     filter: route.query.filter || "",
                // }),
            },
            {
                path: "questions/:id/:slug",
                name: "questions.details",
                component: QuestionDetails,
                props: true,
            },
            {
                path: "questions/ask",
                name: "questions.create",
                component: QuestionCreate,
            },
            {
                path: "questions/:id/edit",
                name: "questions.edit",
                component: QuestionEdit,
            },
            {
                path: "tags",
                name: "tags.index",
                component: TagIndex,
            },
            {
                path: "users",
                name: "users.index",
                component: UserIndex,
            },
        ],
    },
    {
        path: "/",
        component: GuestLayout,
        children: [
            {
                path: "register",
                name: "register",
                component: Register,
            },
            {
                path: "login",
                name: "login",
                component: Login,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
