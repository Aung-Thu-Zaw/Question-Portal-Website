import axios from "axios";

export default {
    state: {
        paginateUsers: [],
    },
    getters: {
        getPaginateUsers(state) {
            return state.paginateUsers;
        },
    },
    mutations: {
        setPaginateUsers(state, paginateUsers) {
            state.paginateUsers = paginateUsers;
        },
    },

    actions: {
        async fetchUsersWithPagination({ commit }, payload) {
            try {
                const response = await axios.get(
                    `http://localhost:8000/api/users?page=${payload.page}&search=${payload.globalSearch}&filter=${payload.filterBy}`
                );

                if (!response.data) {
                    throw new Error("Response not found!");
                }

                const paginateUsersData = response.data;

                commit("setPaginateUsers", paginateUsersData);
            } catch (error) {
                console.log(error.message);
            }
        },
    },
};
