import axios from "axios";

export default {
    state: {
        questions: [],
        paginateQuestions: [],
        singleSpecificQuestion: [],
    },
    getters: {
        getQuestions(state) {
            return state.questions;
        },
        getPaginateQuestions(state) {
            return state.paginateQuestions;
        },
        getSingleSpecificQuestion(state) {
            return state.singleSpecificQuestion;
        },
    },
    mutations: {
        setQuestions(state, questions) {
            state.questions = questions;
        },
        setPaginateQuestions(state, paginateQuestions) {
            state.paginateQuestions = paginateQuestions;
        },
        setSingleSpecificQuestion(state, singleSpecificQuestion) {
            state.singleSpecificQuestion = singleSpecificQuestion;
        },
        setQuestion(state, newQuestion) {
            state.questions.unshift(newQuestion);
        },
    },

    actions: {
        async fetchAllQuestions({ commit }) {
            const response = await axios.get(
                "http://localhost:8000/api/latest-questions"
            );

            const questionData = response.data.data;

            commit("setQuestions", questionData);
        },

        async fetchQuestionsWithPagination({ commit }, payload) {
            const response = await axios.get(
                `http://localhost:8000/api/questions?page=${payload.page}&filter=${payload.filterBy}`
            );

            const paginateQuestionData = response.data;

            commit("setPaginateQuestions", paginateQuestionData);
        },

        async fetchSingleSpecificQuestion({ commit }, slug) {
            const response = await axios.get(
                `http://localhost:8000/api/questions/${slug}`
            );

            const singleSpecificQuestionData = response.data.data;

            console.log(singleSpecificQuestionData);

            commit("setSingleSpecificQuestion", singleSpecificQuestionData);
        },

        async createQuestion({ commit }, payload) {
            console.log(payload);
            const response = await axios.post(
                `http://localhost:8000/api/questions`,
                payload
            );

            const createQuestionData = response.data.data;

            console.log(createQuestionData);

            commit("setQuestion", createQuestionData);
        },
    },
};
