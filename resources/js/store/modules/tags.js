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
        async fetchTagsWithPagination({ commit }, payload) {
            const response = await axios.get(
                `http://localhost:8000/api/tags?page=${payload.page}&search=${payload.global_search}`
            );

            const paginateTagData = response.data;

            console.log(paginateTagData);

            commit("setPaginateTags", paginateTagData);
        },
    },
};
