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
            try {
                const response = await axios.get(
                    `http://localhost:8000/api/tags?page=${payload.page}&search=${payload.globalSearch}&filter=${payload.filterBy}`
                );

                if (!response.data) {
                    throw new Error("Response not found!");
                }

                const paginateTagData = response.data;

                commit("setPaginateTags", paginateTagData);
            } catch (error) {
                console.log(error.message);
            }
        },
    },
};
