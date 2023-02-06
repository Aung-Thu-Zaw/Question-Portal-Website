import axios from "axios";

export default {
    state: {
        paginateTags: [],
    },
    getters: {
        getPaginateTags(state) {
            return state.paginateTags;
        },
    },
    mutations: {
        setPaginateTags(state, paginateTags) {
            state.paginateTags = paginateTags;
        },
    },

    actions: {
        async fetchTagsWithPagination({ commit }, page = 1) {
            const response = await axios.get(
                `http://localhost:8000/api/tags?page=${page}`
            );

            const paginateTagData = response.data;

            commit("setPaginateTags", paginateTagData);
        },
    },
};
