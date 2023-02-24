import axios from "axios";

export default {
    state: {
        user: null,
        token: null,
    },
    getters: {
        getUser(state) {
            return state.user;
        },
        getToken(state) {
            return state.token;
        },
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setToken(state, token) {
            state.token = token;
        },
    },

    actions: {
        async register({ state, commit }, registerFormData) {
            const response = await axios.post(
                `http://localhost:8000/api/users/register`,
                registerFormData,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `${state.token}`,
                    },
                }
            );

            commit("setToken", response.data.data.token);
            commit("setUser", response.data.data.user);

            return response;
        },

        async login({ state, commit }, loginFormData) {
            const response = await axios.post(
                `http://localhost:8000/api/users/login`,
                loginFormData,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer${state.token}`,
                    },
                }
            );

            commit("setUser", response.data.data.user);
            commit("setToken", response.data.data.token);

            return response;
        },

        async logout({ state, commit }) {
            await axios.post(`http://localhost:8000/api/users/logout`, null, {
                headers: {
                    Authorization: `Bearer ${state.token}`,
                },
            });
            commit("setUser", null);
            commit("setToken", null);
        },
    },
};
