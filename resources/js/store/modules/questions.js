import axios from "axios";

export default {
    state: {
        questions: [],
    },
    getters: {
        getQuestions(state) {
            return state.questions;
        },
    },
    mutations: {
        setQuestions(state, questions) {
            state.questions = questions;
        },
    },

    actions: {
        async fetchQuestions({ commit }) {
            const response = await axios.get(
                `http://localhost:8000/api/questions`
            );

            const questionData = response.data.data;

            console.log(questionData);

            commit("setQuestions", questionData);
        },
    },
};
