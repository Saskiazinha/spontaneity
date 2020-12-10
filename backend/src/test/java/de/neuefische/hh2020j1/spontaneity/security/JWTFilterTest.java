package de.neuefische.hh2020j1.spontaneity.security;


import de.neuefische.hh2020j1.spontaneity.dao.UserDao;
import de.neuefische.hh2020j1.spontaneity.dto.SendPostDto;
import de.neuefische.hh2020j1.spontaneity.model.SpontaneityUser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.test.context.TestPropertySource;
import org.springframework.http.*;

import java.time.Duration;
import java.time.Instant;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource(properties = "jwt.secretkey=a-secrettoken")
class JWTFilterTest {

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
        userDao.save(SpontaneityUser.builder().username("saskia").friends(List.of()).password(password).build());
    }

    @Test
    public void getFriendsPostsWithValidTokenShouldReturnOK(){
        //Given
        String token= Jwts.builder()
                .setClaims(new HashMap<>())
                .setSubject("saskia")
                .setIssuedAt(Date.from(Instant.now()))
                .setExpiration(Date.from(Instant.now().plus(Duration.ofMinutes(60))))
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
        //When
        String url="http://localhost:"+port+"/api/posts";

        HttpHeaders headers=new HttpHeaders();
        headers.setBearerAuth(token);
        HttpEntity<Void> entity=new HttpEntity<>(headers);

        ResponseEntity<String>response=testRestTemplate.exchange(url,HttpMethod.GET,entity,String.class);

        //Then
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
    }

    @Test
    public void getFriendsPostsShouldReturnForbiddenWhenTokenIsExpired(){
        //Given
        String token= Jwts.builder()
                .setClaims(new HashMap<>())
                .setSubject("saskia")
                .setIssuedAt(Date.from(Instant.now()))
                .setExpiration(Date.from(Instant.now().minus(Duration.ofMinutes(5))))
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
        //When
        String url="http://localhost:"+port+"/api/posts";

        HttpHeaders headers=new HttpHeaders();
        headers.setBearerAuth(token);
        HttpEntity<Void> entity=new HttpEntity<>(headers);

        ResponseEntity<String>response=testRestTemplate.exchange(url,HttpMethod.GET,entity,String.class);

        //Then
        assertThat(response.getStatusCode(), is(HttpStatus.FORBIDDEN));

    }

    @Test
    public void getFriendsPostsShouldReturnForbiddenWhenSecretKeyNoMatch(){
        //Given
        String token= Jwts.builder()
                .setClaims(new HashMap<>())
                .setSubject("saskia")
                .setIssuedAt(Date.from(Instant.now()))
                .setExpiration(Date.from(Instant.now().plus(Duration.ofMinutes(60))))
                .signWith(SignatureAlgorithm.HS256, "otherKey")
                .compact();
        //When
        String url="http://localhost:"+port+"/api/posts";

        HttpHeaders headers=new HttpHeaders();
        headers.setBearerAuth(token);
        HttpEntity<Void> entity=new HttpEntity<>(headers);

        ResponseEntity<String>response=testRestTemplate.exchange(url,HttpMethod.GET,entity,String.class);

        //Then
        assertThat(response.getStatusCode(), is(HttpStatus.FORBIDDEN));

    }



}
