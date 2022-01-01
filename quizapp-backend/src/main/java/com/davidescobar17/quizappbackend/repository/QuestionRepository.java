package com.davidescobar17.quizappbackend.repository;

import com.davidescobar17.quizappbackend.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Long> {
}
