import axios from "axios";

export default {
    state: {
        questions: [],
        // paginateQuestions: [],
    },
    getters: {
        getQuestions(state) {
            return state.questions;
        },
        // getQuestionById: (state) => (id) => {
        //     return state.questions.find((question) => question.id === id);
        // },
    },
    mutations: {
        setQuestions(state, questions) {
            state.questions = questions;
        },
        // setPaginateQuestions(state, paginateQuestions) {
        //     state.paginateQuestions = paginateQuestions;
        // },
    },

    actions: {
        async fetchAllQuestions({ commit }) {
            const response = await axios.get(
                "http://localhost:8000/api/latest-questions"
            );

            const questionData = response.data.data;

            console.log("question data", questionData);

            commit("setQuestions", questionData);
        },

        // async fetchQuestionsWithPagination({ commit }, page = 1) {
        //     const response = await axios.get(
        //         `http://localhost:8000/api/questions?page=${page}`
        //     );

        //     const paginateQuestionData = response.data;

        //     commit("setPaginateQuestions", paginateQuestionData);
        // },
    },
};
