import axios from "axios";

export default {
    state: {
        answers: [],
    },
    getters: {
        getAnswers(state) {
            return state.answers;
        },

        getAnswersByQuestionId: (state) => (questionId) => {
            return state.answers.filter(
                (answer) => answer.question_id === questionId
            );
        },
    },
    mutations: {
        setAnswers(state, answers) {
            state.answers = answers;
        },
        setNewAnswer(state, newAnswer) {
            state.answers.push(newAnswer);
        },
    },

    actions: {
        async fetchAllAnswers({ commit }, questionId) {
            try {
                const response = await axios.get(
                    `http://localhost:8000/api/answers`
                );

                if (!response.data) {
                    throw new Error("Response data not found!");
                }
                const answerData = response.data.data;

                commit("setAnswers", answerData);
            } catch (error) {
                console.log(error.message);
            }
        },
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
