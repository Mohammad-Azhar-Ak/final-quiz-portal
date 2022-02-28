package com.quizPortal.quizPortal.service.impl;

import com.quizPortal.quizPortal.model.Entities.Quiz;
import com.quizPortal.quizPortal.dao.QuizDao;
import com.quizPortal.quizPortal.model.dto.CreateQuizRequest;
import com.quizPortal.quizPortal.service.QuizService;
import com.quizPortal.quizPortal.service.UserSessionService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.AccessDeniedException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuizServiceImpl implements QuizService {

    @Autowired
    QuizDao quizDao;

    @Autowired
    UserSessionService userSessionService;

    @Override
    public Quiz createQuiz(CreateQuizRequest request) {
        if(StringUtils.isBlank(request.getTitle()))
            throw new IllegalArgumentException("Title cannot be empty.");

        Quiz quiz = new Quiz();
        quiz.setTitle(request.getTitle());
        return quizDao.save(quiz);
    }

    @Override
    public Page<Quiz> getAllQuiz(String token, Integer page) {
        if(userSessionService.validateSession(token)==null)
            throw new AccessDeniedException("Token cannot be null.");
        Pageable pageable = PageRequest.of(page,18);
        return quizDao.findAll(pageable);
    }
}
