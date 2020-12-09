package de.neuefische.hh2020j1.spontaneity.controller;


import de.neuefische.hh2020j1.spontaneity.dao.UserDao;
import de.neuefische.hh2020j1.spontaneity.dto.FriendDto;
import de.neuefische.hh2020j1.spontaneity.dto.LoginDto;
import de.neuefische.hh2020j1.spontaneity.seeder.FriendSeeder;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.*;
import org.springframework.test.context.TestPropertySource;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource(properties = "jwt.secretkey=a-secrettoken")
public class FriendsControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Autowired
    private UserDao userDao;

    @BeforeEach
    public void setupDb(){
        userDao.deleteAll();
        userDao.save(FriendSeeder.getStockSpontaneityUser());
        userDao.save(FriendSeeder.getSecondStockSpontaneityUser());
    }

    private String getFriendsUrl(){
        return "http://localhost:"+port+"/api/friends";
    }

    private String login(){
        ResponseEntity<String> response=testRestTemplate.postForEntity("http://localhost:"+port+"/auth/login",new LoginDto("carsten123","a-password"),String.class);
        return response.getBody();
    }

    private <T> HttpEntity<T> getValidAuthorizationEntity(T data) {
        String token = login();

        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        return new HttpEntity<T>(data,headers);
    }

    @Test
    public void getFriendsTest(){
        //Given
        String url=getFriendsUrl();

        //When
        HttpEntity<Void> entity=getValidAuthorizationEntity(null);
        ResponseEntity <FriendDto[]> response=testRestTemplate.exchange(url, HttpMethod.GET,entity, FriendDto[].class);

        //Then
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(),is(FriendSeeder.getStockFriends().toArray()));
    }

    @Test
    public void addFriendTest(){
        //Given
        String url=getFriendsUrl();

        //When
        HttpEntity<String> entity=getValidAuthorizationEntity("franzi123");
        ResponseEntity <FriendDto> response=testRestTemplate.exchange(url, HttpMethod.POST,entity, FriendDto.class);

        //Then
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(),is(FriendSeeder.getSecondStockFriendDto()));
    }

    @Test
    public void addNotExistingFriendTest(){
        //Given
        String url=getFriendsUrl();

        //When
        HttpEntity<String> entity=getValidAuthorizationEntity("notExistingUser");
        ResponseEntity <FriendDto> response=testRestTemplate.exchange(url, HttpMethod.POST,entity, FriendDto.class);

        //Then
        assertThat(response.getStatusCode(), is(HttpStatus.NOT_FOUND));
    }

    @Test
    public void deleteFriendTest(){
        //Given
        String url=getFriendsUrl();

        //When
        HttpEntity<String> entity=getValidAuthorizationEntity("rebekka123");
        ResponseEntity <Void> response=testRestTemplate.exchange(url, HttpMethod.DELETE,entity, Void.class);

        //Then
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        boolean friendPresent=userDao.findById("carsten123").get().getFriends().contains(FriendSeeder.getThirdStockFriendDto());
        assertThat(friendPresent,is(false));
    }




}
