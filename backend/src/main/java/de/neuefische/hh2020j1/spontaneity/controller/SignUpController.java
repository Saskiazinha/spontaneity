package de.neuefische.hh2020j1.spontaneity.controller;

import de.neuefische.hh2020j1.spontaneity.model.SpontaneityUser;
import de.neuefische.hh2020j1.spontaneity.service.SignUpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@RestController
@RequestMapping("/auth/signup")
public class SignUpController {

    private final SignUpService signUpService;

    @Autowired
    public SignUpController(SignUpService signUpService) {
        this.signUpService = signUpService;
    }

    @PostMapping
    public SpontaneityUser signUp (@RequestBody SpontaneityUser spontaneityUser){
        Optional<SpontaneityUser>user=signUpService.signUp(spontaneityUser);
        if (user.isEmpty()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User already excists");
        }
        if (!signUpService.validatePassword(spontaneityUser.getPassword())){
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Password not valid"){
            };
        }
        return user.get();
    }
}
