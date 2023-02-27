import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import questions from "./modules/questions";
import answers from "./modules/answers";
import tags from "./modules/tags";
import users from "./modules/users";
import auth from "./modules/auth";

export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        questions,
        answers,
        tags,
        users,
        auth,
    },
    plugins: [
        createPersistedState({
            key: "user",
            paths: ["auth"],
        }),
    ],
});
