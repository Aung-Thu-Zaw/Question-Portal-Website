import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import QuestionIndex from "../views/questions/Index.vue";
import QuestionCreate from "../views/questions/Create.vue";
import QuestionEdit from "../views/questions/Edit.vue";
import QuestionDetails from "../views/questions/Details.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/questions",
        name: "question.index",
        component: QuestionIndex,
    },
    {
        path: "/questions/:id",
        name: "question.details",
        component: QuestionDetails,
        props: true,
    },
    {
        path: "/questions/ask",
        name: "question.create",
        component: QuestionCreate,
    },
    {
        path: "/questions/:id/edit",
        name: "question.edit",
        component: QuestionEdit,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
