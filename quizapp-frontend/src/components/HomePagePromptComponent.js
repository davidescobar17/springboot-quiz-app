import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import QuestionService from '../services/QuestionService'

const ListQuestionComponent = () => {

  const [questions, setQuestions] = useState([])

  useEffect(() => {

    getAllQuestions();
  }, [])

  const getAllQuestions = () => {
    
    QuestionService.getAllQuestions().then((response) => {
      setQuestions(response.data)
      console.log(response.data);
    }).catch(error =>{
      console.log(error);
    })
  }

  return (
    <div className = "container vertical-center">
      <div className = "jumbotron m-5">
        <h1 className = "text-center display-1"> Test your knowledge </h1>
        <div className="text-center m-5">
          <Link to = "/questions" className = "btn btn-primary mx-2" > Manage questions </Link>
          <Link to = "/test" state={{questions: questions}} className = "btn btn-primary mx-2" > Test myself </Link>
        </div>
      </div>
    </div>
  )
}

export default ListQuestionComponent
