package de.neuefische.hh2020j1.spontaneity.controller;

import de.neuefische.hh2020j1.spontaneity.model.SpontaneityUser;
import de.neuefische.hh2020j1.spontaneity.service.SignUpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth/signup")
public class SignUpController {

    private final SignUpService signUpService;

    @Autowired
    public SignUpController(SignUpService signUpService) {
        this.signUpService = signUpService;
    }

    @PostMapping
    public void signUp (@RequestBody SpontaneityUser spontaneityUser){
        signUpService.signUp(spontaneityUser);
    }

}
