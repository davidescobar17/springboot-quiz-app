import React, {useState, useEffect} from 'react'
import {Link } from 'react-router-dom';

const AddQuestionComponent = (props) => {

    const [answer, setInput] = useState('')
    const [emailId, setEmailId] = useState('')
    const [qNumber, setQNumber] = useState(0)
    const [questionList, setQuestionList] = useState([])
    const [question, setQuestion] = useState('')
    const [qCorrectCount, setQCorrectCount] = useState(0)
    const [result, setResult] = useState('')
    const [showingAnswer, setShowingAnswer] = useState(false)

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        while (currentIndex != 0) {
      
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }

    const submitAnswer = (e) => {
        e.preventDefault();
        
        const inputs = {question, answer, emailId}

        setEnteredAnswer(inputs.answer)

        if(inputs.answer == questionList[qNumber].answer){

            setQCorrectCount(prev => prev + 1)
            setResult("Correct")
            setShowingAnswer(true)
        }
        else{

            setResult("Answer was " + questionList[qNumber].answer)
            setShowingAnswer(true)
        }
    }

    const nextQuestion = (e) => {
        e.preventDefault();

        setQNumber(prev => prev + 1)
        setShowingAnswer(false)
        setInput("")
    }

    const resetTest = (e) => {
        e.preventDefault();

        console.log(e.target)
        
        setQNumber(0)
        setQCorrectCount(0)
        setQuestionList(prev => shuffle(prev))
        setResult("")
    }

    useEffect(() => {

        // shuffle the questions
        setQuestionList(shuffle(props.location.state))

    }, [])

    useEffect(() => {

        // when moving to the next question, update the current correct answer
        if (qNumber > 0 && qNumber < questionList.length + 1){

            setCorrectAnswer(questionList[qNumber - 1].answer)
        }

    }, [qNumber])

    const questionAnswerUI = () => {

        if(showingAnswer){
            return (

                <div>
                    <div className = "form-group my-3 lead" style = {{textAlign:'center'}}>
                        {questionList[qNumber].question}
                    </div>

                    <div className = "form-group mb-2 text-center">
                        <label className = "form-label lead">{result}</label>
                        <input
                            type = "text"
                            name = "answer"
                            className = "form-control"
                            value = {question.answer}
                            disabled = {showingAnswer}
                        >
                        </input>
                    </div>

                    <div class="d-flex mt-3" style={{justifyContent:"center"}}>
                        <button autoFocus key="submitAnswerButton" className = "btn btn-success mx-2" onClick = {(e) => nextQuestion(e)} >Next</button>
                        <Link to="/" className="btn btn-danger mx-2"> Cancel </Link>
                    </div>
                </div>
            )
        }else{
            return(
                <div>
                    <div className = "form-group my-3 lead" style = {{textAlign:'center'}}>
                        {questionList[qNumber].question}
                    </div>

                    <div className = "form-group mb-2">
                        <label className = "form-label"> Enter your answer:</label>
                        <input
                            autoFocus
                            key = "answerTextInput"
                            type = "text"
                            placeholder = "Enter answer"
                            name = "answer"
                            className = "form-control"
                            value = {answer}
                            onChange = {(e) => setInput(e.target.value)}
                        >
                        </input>
                    </div>

                    <div class="d-flex mt-3" style={{justifyContent:"center"}}>
                        <button className = "btn btn-success mx-2" onClick = {(e) => submitAnswer(e)} >Submit</button>
                        <Link to="/" className="btn btn-danger mx-2"> Cancel </Link>
                    </div>
                </div>
            )
        }
    }

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <div className = "card-body">
                            {qNumber < questionList.length == true ? 

                                <h2 className = "text-center">Question {qNumber + 1}/{questionList.length}:</h2>
                            :
                                <h2 className = "text-center">Completed</h2>
                            }

                            {qNumber < questionList.length == true ? 

                                <form>

                                    {
                                        questionAnswerUI()
                                    }
                                    
                                </form>
                            :
                                <div>
                                    <div className = "form-group my-3 text-center lead">
                                        Your score was {qCorrectCount} / {questionList.length}
                                    </div>

                                    <div class="d-flex mt-3" style={{justifyContent:"center"}}>
                                        <button autoFocus key="submitAnswerButton" className = "btn btn-success" onClick = {(e) => resetTest(e)} >Reset</button>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default AddQuestionComponent
