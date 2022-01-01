import axios from 'axios';

const QUESTION_BASE_REST_API_URL = 'http://localhost:8080/api/v1/questions';

class QuestionService{

    getAllQuestions(){
        return axios.get(QUESTION_BASE_REST_API_URL);
    }

    createQuestion(question){
        return axios.post(QUESTION_BASE_REST_API_URL, question);
    }

    getQuestionById(questionId){
        return axios.get(QUESTION_BASE_REST_API_URL + '/' + questionId);
    }

    updateQuestion(questionId, question){
        return axios.put(QUESTION_BASE_REST_API_URL + '/' + questionId, question);
    }

    deleteQuestion(questionId){
        return axios.delete(QUESTION_BASE_REST_API_URL + '/' + questionId);
    }
}

export default new QuestionService();