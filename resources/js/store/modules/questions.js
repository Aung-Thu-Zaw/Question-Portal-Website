import axios from "axios";

export default {
    state: {
        questions: [],
        paginateQuestions: [],
        singleSpecificQuestion: {},
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
            try {
                const response = await axios.get(
                    "http://localhost:8000/api/latest-questions"
                );

                if (!response.data) {
                    throw new Error("Response not found!");
                }

                const questionData = response.data.data;

                commit("setQuestions", questionData);
            } catch (error) {
                console.log(error.message);
            }
        },

        async fetchQuestionsWithPagination({ commit }, payload) {
            try {
                const response = await axios.get(
                    `http://localhost:8000/api/questions?page=${payload.page}&filter=${payload.filterBy}`
                );

                if (!response.data) {
                    throw new Error("Response not found!");
                }

                const paginateQuestionData = response.data;

                commit("setPaginateQuestions", paginateQuestionData);
            } catch (error) {
                console.log(error);
            }
        },

        async fetchSingleSpecificQuestion({ commit }, slug) {
            try {
                const response = await axios.get(
                    `http://localhost:8000/api/questions/${slug}`
                );

                if (!response.data) {
                    throw new Error("Response not found!");
                }

                const singleSpecificQuestionData = response.data.data;

                commit("setSingleSpecificQuestion", singleSpecificQuestionData);
            } catch (error) {
                console.log(error.message);
            }
        },

        async createQuestion({ commit }, payload) {
            try {
                const response = await axios.post(
                    `http://localhost:8000/api/questions`,
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

                const createQuestionData = response.data.data;

                commit("setQuestion", createQuestionData);

                return response;
            } catch (error) {
                console.log(error.message);
            }
        },
    },
};
