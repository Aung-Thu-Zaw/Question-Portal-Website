import axios from "axios";

export default {
    state: {
        questions: [
            { id: 1, question: "haha", details: "baklfjasdkfjfklj" },
            { id: 2, question: "haha", details: "baklfjasdkfjfklj" },
            { id: 3, question: "haha", details: "baklfjasdkfjfklj" },
        ],
    },
    getters: {
        getQuestions(state) {
            return state.questions;
        },
        getQuestionById: (state) => (id) => {
            return state.questions.find((question) => question.id === id);
        },
    },
    mutations: {
        setQuestions(state, questions) {
            state.questions = questions;
        },
    },

    actions: {
        async fetchQuestions({ commit }, page = 1) {
            const response = await axios.get(
                `http://localhost:8000/api/questions?page=${page}`
            );

            const questionData = response.data;

            commit("setQuestions", questionData);
        },
    },
};
