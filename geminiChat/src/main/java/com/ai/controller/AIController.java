package com.ai.controller;

import com.ai.service.QnaService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@AllArgsConstructor
@RequestMapping("/qna")
public class AIController {
    private final QnaService qnaService;


    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/ask")
    public ResponseEntity<String> askQuestion(@RequestBody Map<String,String> payLoad){
        String question=payLoad.get("question");
        String answer= qnaService.getAnswer(question);
        return ResponseEntity.ok(answer);
    }
}
