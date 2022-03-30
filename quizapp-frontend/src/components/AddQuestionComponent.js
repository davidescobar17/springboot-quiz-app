import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import QuestionService from '../services/QuestionService';

const AddQuestionComponent = () => {

  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const navigate = useNavigate();
  const {id} = useParams();

  const saveOrUpdateQuestion = (e) => {
    
    e.preventDefault();

    const inputs={question, answer}

    if (id) {
      QuestionService.updateQuestion(id, inputs).then((response) => {
        navigate('/questions');
      }).catch(error => {
        console.log(error);
      })

    }
    else {
      QuestionService.createQuestion(inputs).then((response) =>{
        console.log(response.data);
        navigate('/questions');
      }).catch(error => {
        console.log(error);
      })
    }
  }

  useEffect(() => {

    QuestionService.getQuestionById(id).then((response) =>{
      setQuestion(response.data.question);
      setAnswer(response.data.answer);
    }).catch(error => {
      console.log(error);
    })
  }, [])

  const title = () => {

    if (id) {
      return <h2 className="text-center"> Update Question </h2>
    }
    else {
      return <h2 className="text-center"> Add Question </h2>
    }
  }

  return (
    <div>
       <br /><br />
       <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
             
            <div className="card-body">
              {
                title()
              }
              <form>
                <div className="form-group mb-2">
                  <label className="form-label"> Question: </label>
                  <input
                    type="text"
                    placeholder="Enter question"
                    name="question"
                    className="form-control"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                  >
                  </input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Answer: </label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    name="answer"
                    className="form-control"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                  >
                  </input>
                </div>

                <div clasNames="d-flex mt-3" style={{justifyContent: 'center'}}>
                  <button className="btn btn-success mx-2" onClick={(e) => saveOrUpdateQuestion(e)} >Submit </button>
                  <Link to="/questions" className="btn btn-danger mx-2"> Cancel </Link>
                </div>
              </form>
            </div>

          </div>
        </div>
       </div>
    </div>
  )
}

export default AddQuestionComponent
