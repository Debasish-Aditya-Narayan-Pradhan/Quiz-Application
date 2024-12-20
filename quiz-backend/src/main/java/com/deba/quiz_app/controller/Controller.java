package com.deba.quiz_app.controller;
import com.deba.quiz_app.Entity.QuizQuestion;
import com.deba.quiz_app.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://127.0.0.1:9090")
@RestController
@RequestMapping("/quiz")
public class Controller {

    @Autowired
    QuizService quizService;


    @PostMapping("/save")
    public QuizQuestion save(@RequestBody QuizQuestion quizQuestion)
    {
        return quizService.save(quizQuestion);
    }

    @GetMapping("/getQuestions")
    public List<QuizQuestion> getQuestion()
    {
        return quizService.get();
    }
}
