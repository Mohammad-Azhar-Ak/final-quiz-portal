package com.quizPortal.quizPortal.service;

import com.quizPortal.quizPortal.model.Entities.Quiz;
import com.quizPortal.quizPortal.model.dto.CreateQuizRequest;
import org.springframework.data.domain.Page;

import java.util.List;

public interface QuizService {

    Quiz createQuiz(CreateQuizRequest request);

    Page<Quiz> getAllQuiz(String token, Integer page);
}
