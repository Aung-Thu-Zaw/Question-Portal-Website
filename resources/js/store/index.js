import { createStore } from "vuex";
import questions from "./modules/questions";
import tags from "./modules/tags";
export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        questions,
        tags,
    },
});
