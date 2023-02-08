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

        // async fetchTagsWithPagination({ commit }, payload) {
        //     const response = await axios.get(
        //         `http://localhost:8000/api/tags?page=${payload.page}&search=${payload.globalSearch}&filter=${payload.filterBy}`
        //     );

        //     const paginateTagData = response.data;

        //     commit("setPaginateTags", paginateTagData);
        // },

        async fetchSingleSpecificQuestion({ commit }, slug) {
            const response = await axios.get(
                `http://localhost:8000/api/questions/${slug}`
            );

            const singleSpecificQuestionData = response.data.data;

            console.log(singleSpecificQuestionData);

            commit("setSingleSpecificQuestion", singleSpecificQuestionData);
        },
    },
};
