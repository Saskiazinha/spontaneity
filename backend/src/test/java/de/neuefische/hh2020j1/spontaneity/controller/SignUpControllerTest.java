package de.neuefische.hh2020j1.spontaneity.controller;

import de.neuefische.hh2020j1.spontaneity.dao.UserDao;
import de.neuefische.hh2020j1.spontaneity.model.SpontaneityUser;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.test.context.TestPropertySource;


import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource(properties = "jwt.secretkey=a-secrettoken")
public class SignUpControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Autowired
    UserDao userDao;

    @BeforeEach
    public void setupDb(){
        userDao.deleteAll();
        String password= new BCryptPasswordEncoder().encode("1234ZabC");
        SpontaneityUser fiene= SpontaneityUser.builder().username("Fiene").password(password).build();
        userDao.save(fiene);
    }
    private String getSignUpUrl(){
        return "http://localhost:"+port+"auth/signup";
    }

    @Test
    public void signUpWithNewUserTestAndValidPassword(){
        //Given
        String url=getSignUpUrl();
        SpontaneityUser newUser= SpontaneityUser.builder().username("NewUser").password("aZ2345g").build();

        //When
        ResponseEntity <String> response = testRestTemplate.exchange(url, HttpMethod.POST, new HttpEntity<>(newUser),String.class);

        //Then
        assertThat(response.getStatusCode(),is(HttpStatus.OK));
        assertThat(response.getBody(),is(newUser.getUsername()));
    }

    @Test
    public void signUpWithAlreadyExistingUserTest(){
        //Given
        String url=getSignUpUrl();
        SpontaneityUser newUser= SpontaneityUser.builder().username("Fiene").password("1234ZabC").build();

        //When
        ResponseEntity <Void> response = testRestTemplate.exchange(url, HttpMethod.POST, new HttpEntity<>(newUser),Void.class);

        //Then
        assertThat(response.getStatusCode(),is(HttpStatus.BAD_REQUEST));
    }

    @Test
    public void signUpWithNewUserButInvalidPassword(){
        //Given
        String url=getSignUpUrl();
        SpontaneityUser newUser= SpontaneityUser.builder().username("NewUser").password("1234").build();

        //When
        ResponseEntity <String> response = testRestTemplate.exchange(url, HttpMethod.POST, new HttpEntity<>(newUser),String.class);

        //Then
        assertThat(response.getStatusCode(),is(HttpStatus.FORBIDDEN));
    }



}
