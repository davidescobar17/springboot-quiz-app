package com.davidescobar17.quizappbackend.controller;

import com.davidescobar17.quizappbackend.exception.ResourceNotFoundException;
import com.davidescobar17.quizappbackend.model.Question;
import com.davidescobar17.quizappbackend.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/questions")
public class QuestionController {

    @Autowired
    private QuestionRepository questionRepository;

    @GetMapping
    public List<Question> getAllQuestions(){
        return questionRepository.findAll();
    }

    // create question using REST API
    @PostMapping
    public Question createQuestion(@RequestBody Question question) {
        return questionRepository.save(question);
    }

    // get question by id using REST API
    @GetMapping("{id}")
    public ResponseEntity<Question> getQuestionById(@PathVariable  long id){
        Question question = questionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Question not exist with id:" + id));
        return ResponseEntity.ok(question);
    }

    // update question using REST API
    @PutMapping("{id}")
    public ResponseEntity<Question> updateQuestion(@PathVariable long id,@RequestBody Question questionDetails) {
        Question updateQuestion = questionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Question not exist with id: " + id));

        updateQuestion.setQuestion(questionDetails.getQuestion());
        updateQuestion.setAnswer(questionDetails.getAnswer());

        questionRepository.save(updateQuestion);

        return ResponseEntity.ok(updateQuestion);
    }

    // delete question using REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteQuestion(@PathVariable long id){

        Question question = questionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Question not exist with id: " + id));

        questionRepository.delete(question);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
