package com.deba.quiz_app.service;

import com.deba.quiz_app.Entity.QuizQuestion;
import com.deba.quiz_app.quizRepo.QuestionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuizService {

    @Autowired
    private QuestionRepo questionRepo;

    public QuizQuestion save(QuizQuestion quizQuestion)
    {

        return questionRepo.save(quizQuestion);
    }
    public List<QuizQuestion> get()
    {
        return questionRepo.findAll();
    }
}
