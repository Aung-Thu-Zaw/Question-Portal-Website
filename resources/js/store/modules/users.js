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
            const response = await axios.get(
                `http://localhost:8000/api/users?page=${payload.page}&search=${payload.globalSearch}&filter=${payload.filterBy}`
            );

            const paginateUsersData = response.data;

            commit("setPaginateUsers", paginateUsersData);
        },
    },
};
