package de.neuefische.hh2020j1.spontaneity.controller;


import de.neuefische.hh2020j1.spontaneity.model.SpontaneityUser;
import de.neuefische.hh2020j1.spontaneity.dto.LoginDto;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.test.context.TestPropertySource;
import org.springframework.http.ResponseEntity;

import java.util.Date;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;


@SpringBootTest(webEnvironment= SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource(properties = "jwt.secretkey=a-secrettoken")
public class LoginControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Autowired
    private UserDao userDao;

    private final String secretKey="a-secrettoken";

    @BeforeEach
    public void setupUser(){
        userDao.deleteAll();
        String password=new BCryptPasswordEncoder().encode("a-password");
        userDao.save(SpontaneityUser.builder().username("saskia").password(password).build());
    }

    @Test
    public void loginWithValidCredentialsShouldReturnToken() {

        //Given
        LoginDto loginDto = new LoginDto("saskia", "a-password");

        //When
        ResponseEntity<String> response = testRestTemplate.postForEntity("http://localhost:" + port + "/auth/login", loginDto, String.class);

        //Then
        assertThat(response.getStatusCode(), is(HttpStatus.OK));

        String token= response.getBody();
        Claims claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody();

        assertThat(claims.getSubject(),is("saskia"));
        assertThat(claims.getExpiration().after(new Date()),is(true));
    }

    @Test
    public void loginWithInvalidCredentialsShouldReturnForbidden(){

        //Given
        LoginDto loginDto = new LoginDto("saskia","a-wrong-password");

        //When
        ResponseEntity <String> response=testRestTemplate.postForEntity("http://localhost:" + port + "/auth/login", loginDto, String.class);

        //Then
        assertThat(response.getStatusCode(), is(HttpStatus.BAD_REQUEST));

    }



}
