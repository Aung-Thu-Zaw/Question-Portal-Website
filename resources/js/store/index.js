import { createStore } from "vuex";
import questions from "./modules/questions";
import tags from "./modules/tags";
import users from "./modules/users";
export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        questions,
        tags,
        users,
    },
});
