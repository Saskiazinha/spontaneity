package de.neuefische.hh2020j1.spontaneity.controller;

import de.neuefische.hh2020j1.spontaneity.dao.PostDao;
import de.neuefische.hh2020j1.spontaneity.dao.UserDao;
import de.neuefische.hh2020j1.spontaneity.dto.LoginDto;
import de.neuefische.hh2020j1.spontaneity.model.SpontaneityUser;
import de.neuefische.hh2020j1.spontaneity.seeder.PostSeeder;
import org.junit.jupiter.api.BeforeEach;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.test.context.TestPropertySource;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource(properties = "jwt.secretkey=a-secrettoken")
public class PostControllerTest {

    @LocalServerPort
    int port;

    @Autowired
    TestRestTemplate testRestTemplate;

    @Autowired
    private PostDao postDao;

    @Autowired
    private UserDao userDao;

    @BeforeEach
    public void setupDb(){
    postDao.deleteAll();
    postDao.saveAll(PostSeeder.getStockPostsUnsorted());

    userDao.deleteAll();
    String password=new BCryptPasswordEncoder().encode("a-password");
    userDao.save(new SpontaneityUser("Ilaria",password));
    }

    private String getPostsUrl(){
        return "http://localhost"+port+"/api/posts";
    }

    private String login(){
        ResponseEntity<String>response=testRestTemplate.postForEntity("http://localhost:"+port+"/auth/login",new LoginDto("Ilaria","a-password"),String.class);
        return response.getBody();
    }

    private <T> HttpEntity<T> getValidAuthorizationEntity(T data) {
        String token = login();

        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        return new HttpEntity<T>(data,headers);
    }



}
