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
        async createAnswer({ commit }, answerFormData) {
            const response = await axios.post(
                `http://localhost:8000/api/answers`,
                answerFormData,
                {
                    headers: {
                        "content-type": "application/json",
                    },
                }
            );
            commit("setNewAnswer", response.data.data);

            return response;
        },
    },
};
