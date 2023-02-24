import axios from "axios";

export default {
    state: {
        user: null,
        token: null,
        validationErrors: null,
    },
    getters: {
        getUser(state) {
            return state.user;
        },
        getValidationErrors(state) {
            return state.validationErrors;
        },
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setToken(state, token) {
            state.token = token;
        },
        setValidationErrors(state, errors) {
            state.validationErrors = errors;
        },
    },

    actions: {
        async register({ commit }, payload) {
            try {
                const response = await axios.post(
                    `http://localhost:8000/api/users/register`,
                    payload,
                    {
                        headers: {
                            "content-type": "application/json",
                        },
                    }
                );

                if (!response.data) {
                    throw new Error("Response not found!");
                }

                const token = response.data.data.token;
                const user = response.data.data.user;

                axios.defaults.headers.common[
                    "Authorization"
                ] = `Bearer ${token}`;

                commit("setToken", token);
                commit("setUser", user);

                console.log(token);

                return response;
            } catch (error) {
                if (error.response?.data) {
                    commit("setValidationErrors", error.response.data.errors);
                }
            }
        },
        async login({ commit }, payload) {
            try {
                const response = await axios.post(
                    `http://localhost:8000/api/users/login`,
                    payload,
                    {
                        headers: {
                            "content-type": "application/json",
                        },
                    }
                );

                if (!response.data) {
                    throw new Error("Response not found!");
                }

                const token = response.data.data.token;
                const user = response.data.data.user;

                axios.defaults.headers.common[
                    "Authorization"
                ] = `Bearer ${token}`;

                commit("setUser", user);
                commit("setToken", token);

                return response;
            } catch (error) {
                if (error.response?.data) {
                    commit("setValidationErrors", error.response.data.errors);
                }
            }
        },
        async logout({ state, commit }) {
            await axios.post(`http://localhost:8000/api/users/logout`, {
                headers: {
                    Authorization: `Bearer ${state.token}`,
                },
            });
            commit("setUser", null);
            commit("setToken", null);
        },
        // async fetchUser({ commit }, payload) {
        //     try {
        //         const response = await axios.get(
        //             `http://localhost:8000/api/users/${payload.id}`
        //         );

        //         if (!response.data) {
        //             throw new Error("Response not found!");
        //         }

        //         const user = response.data.data;

        //         console.log(user);

        //         commit("setUser", user);

        //         return response;
        //     } catch (error) {
        //         if (error.response?.data) {
        //             commit("setValidationErrors", error.response.data.errors);
        //         }
        //     }
        // },
    },
};
