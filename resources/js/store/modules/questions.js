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
        async fetchQuestions({ commit }, page = 1) {
            const response = await axios.get(
                `http://localhost:8000/api/questions?page=${page}`
            );

            const questionData = response.data;

            commit("setQuestions", questionData);
        },
    },
};

// const laravelData = ref({});

// const getResults = async (page = 1) => {
//     const response = await fetch(`https://example.com/results?page=${page}`);
//     laravelData.value = await response.json();
// };

// getResults();
