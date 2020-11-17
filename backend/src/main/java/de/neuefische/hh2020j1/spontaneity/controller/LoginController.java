package de.neuefische.hh2020j1.spontaneity.controller;
import de.neuefische.hh2020j1.spontaneity.dto.LoginDto;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;


@RestController
@RequestMapping("auth/login")

public class LoginController {

    private final AuthenticationManager authenticationManager;

    public LoginController(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @PostMapping
    public String login (@RequestBody LoginDto loginDto){
        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(loginDto.getUsername(),loginDto.getPassword());
        try {
            authenticationManager.authenticate(authentication);
        } catch (AuthenticationException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "bad credentials");
        }
        return "token";
    }


}
