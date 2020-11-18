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
        String password= new BCryptPasswordEncoder().encode("1234");
        SpontaneityUser fiene= new SpontaneityUser("Fiene",password);
        userDao.save(fiene);
    }

    private String getSignUpUrl(){
        return "https://localhost:"+port+"auth/signup";
    }

    @Test
    public void signUpWithNewUserTest(){
        //Given
        String url=getSignUpUrl();
        SpontaneityUser newUser= new SpontaneityUser("NewUser","5678");

        //When
        ResponseEntity <Void> response = testRestTemplate.exchange(url, HttpMethod.POST, new HttpEntity<>(newUser),Void.class);

        //Then
        assertThat(response.getStatusCode(),is(HttpStatus.OK));
    }



}
