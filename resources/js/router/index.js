import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import QuestionIndex from "../views/questions/Index.vue";
import QuestionCreate from "../views/questions/Create.vue";
import QuestionEdit from "../views/questions/Edit.vue";
import QuestionDetails from "../views/questions/Details.vue";
import TagIndex from "../views/tags/Index.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/questions",
        name: "questions.index",
        component: QuestionIndex,
    },
    {
        path: "/questions/:id/:slug",
        name: "questions.details",
        component: QuestionDetails,
        props: true,
    },
    {
        path: "/questions/ask",
        name: "questions.create",
        component: QuestionCreate,
    },
    {
        path: "/questions/:id/edit",
        name: "questions.edit",
        component: QuestionEdit,
    },
    {
        path: "/tags",
        name: "tags.index",
        component: TagIndex,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
