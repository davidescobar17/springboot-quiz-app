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

    const deleteQuestion = (questionId) => {
       QuestionService.deleteQuestion(questionId).then((response) =>{
        getAllQuestions();

       }).catch(error =>{
           console.log(error);
       })
    }

    return (
        <div className = "container m-5">

            <h1 className = "text-center display-4"> Manage Questions </h1>
            
            <div className = "container d-flex mt-3 mb-2" style={{justifyContent:'center'}}>
                <Link to = "/add-question" className = "btn btn-primary mb-2" > Add question </Link>
            </div>

            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th> Id </th>
                        <th> Question </th>
                        <th> Answer </th>
                        <th> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        questions.map(
                            question =>
                            <tr key = {question.id}> 
                                <td> {question.id} </td>
                                <td> {question.question} </td>
                                <td> {question.answer} </td>
                                <td>
                                    <div className = "container d-flex">
                                        <Link className = "btn btn-info" to = {`/edit-question/${question.id}`} > Update </Link>
                                        <button className = "btn btn-danger" onClick = {() => deleteQuestion(question.id)}
                                            style = {{marginLeft:"10px"}}> Delete </button>
                                    </div>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}

export default ListQuestionComponent
