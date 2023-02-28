import axios from "axios";

export default {
    state: {
        answers: [],
    },
    getters: {},
    mutations: {
        setNewAnswer(state, newAnswer) {
            state.answers.unshift(newAnswer);
        },
    },

    actions: {
        async createAnswer({ commit }, payload) {
            const response = await axios.post(
                `http://localhost:8000/api/answers`,
                payload.answerFormData,
                {
                    headers: {
                        "content-type": "application/json",
                        Authorization: `Bearer ${payload.token}`,
                    },
                }
            );
            commit("setNewAnswer", response.data.data);

            return response;
        },
    },
};
