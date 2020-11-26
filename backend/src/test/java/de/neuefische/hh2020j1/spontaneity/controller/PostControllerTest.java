package de.neuefische.hh2020j1.spontaneity.controller;

import de.neuefische.hh2020j1.spontaneity.dao.PostDao;
import de.neuefische.hh2020j1.spontaneity.dao.UserDao;
import de.neuefische.hh2020j1.spontaneity.dto.AddPostDto;
import de.neuefische.hh2020j1.spontaneity.dto.SendPostDto;
import de.neuefische.hh2020j1.spontaneity.dto.UpdatePostDto;
import de.neuefische.hh2020j1.spontaneity.model.Post;
import de.neuefische.hh2020j1.spontaneity.model.SpontaneityUser;
import de.neuefische.hh2020j1.spontaneity.seeder.PostSeeder;
import de.neuefische.hh2020j1.spontaneity.dto.LoginDto;
import de.neuefische.hh2020j1.spontaneity.utils.EnumCategory;
import de.neuefische.hh2020j1.spontaneity.utils.EnumStatus;
import de.neuefische.hh2020j1.spontaneity.utils.IdUtils;
import de.neuefische.hh2020j1.spontaneity.utils.TimestampUtils;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.test.context.TestPropertySource;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalTime;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.when;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource(properties = "jwt.secretkey=a-secrettoken")
public class PostControllerTest {

    @LocalServerPort
    private int port;

    @MockBean
    private IdUtils mockedIdUtils;

    @MockBean
    private TimestampUtils mockedTimeStampUtils;

    @Autowired
    private TestRestTemplate testRestTemplate;

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
    userDao.save(new SpontaneityUser("Franzi",password));
    }

    private String getPostsUrl(){
        return "http://localhost:"+port+"/api/posts";
    }

    private String login(){
        ResponseEntity<String>response=testRestTemplate.postForEntity("http://localhost:"+port+"/auth/login",new LoginDto ("Franzi","a-password"),String.class);
        return response.getBody();
    }

    private <T> HttpEntity<T> getValidAuthorizationEntity(T data) {
        String token = login();

        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        return new HttpEntity<T>(data,headers);
    }

    @Test
    public void getPostsSortedTest(){
        //Given
        String url=getPostsUrl();

        //When
        HttpEntity<Void>entity=getValidAuthorizationEntity(null);
        ResponseEntity <SendPostDto[]> response = testRestTemplate.exchange(url, HttpMethod.GET,entity, SendPostDto[].class);

        //Then
        assertThat(response.getStatusCode(),is(HttpStatus.OK));
        assertThat(response.getBody(),is(PostSeeder.getStockSendPostsDtoSortedWithoutPrincipal().toArray()));
    }

    @Test
    public void getPostsOfUserTest(){
        //Given
        String url=getPostsUrl()+"/myposts";

        //When
        HttpEntity<Void>entity=getValidAuthorizationEntity(null);
        ResponseEntity <SendPostDto[]> response = testRestTemplate.exchange(url, HttpMethod.GET,entity, SendPostDto[].class);

        //Then
        assertThat(response.getStatusCode(),is(HttpStatus.OK));
        assertThat(response.getBody(),is(PostSeeder.getStockSendPostsDtoSortedForPrincipal().toArray()));
    }

    @Test
    public void addPostTest(){
        //Given
        String id="someId";
        Instant instant= Instant.parse("2020-11-26T10:00:00Z");

        String url=getPostsUrl();
        AddPostDto addPostDto= new AddPostDto(LocalDate.of(2020,11,25), LocalTime.of(14,00),LocalTime.of(16,00), EnumStatus.YELLOW,"Altona", EnumStatus.BLUE, EnumCategory.Meal ,EnumStatus.GREEN, "I would like to have a dinner out");
        Post postExpected=new Post(id, "Franzi", Instant.parse("2020-11-25T13:00:00Z"), Instant.parse("2020-11-25T15:00:00Z"),EnumStatus.YELLOW,"Altona" , EnumStatus.BLUE, EnumCategory.Meal,EnumStatus.GREEN, "I would like to have a dinner out", instant);

        when(mockedIdUtils.generateId()).thenReturn(id);
        when(mockedTimeStampUtils.generateTimestampInstant()).thenReturn(instant);

        //When
        HttpEntity<AddPostDto> entity=getValidAuthorizationEntity(addPostDto);
        ResponseEntity<Post> response=testRestTemplate.exchange(url,HttpMethod.POST,entity, Post.class);

        //Then
        assertThat(response.getStatusCode(),is(HttpStatus.OK));
        assertThat(response.getBody(), is(postExpected));
    }

//    @Test
//    public void updatePostTest(){
//        //Given
//        String url=getPostsUrl()+"/someId";
//        Instant instant= Instant.parse("2020-11-26T10:00:00Z");
//        UpdatePostDto updatePostDto= new UpdatePostDto("someId",LocalDate.of(2020,11,25), LocalTime.of(14,00),LocalTime.of(16,00), EnumStatus.GREEN,"Altona", EnumStatus.BLUE, EnumCategory.Meal ,EnumStatus.BLUE, "I would like to have a dinner out");
//
//        when(mockedTimeStampUtils.generateTimestampInstant()).thenReturn(instant);
//
//        //When
//        HttpEntity <UpdatePostDto> entity=getValidAuthorizationEntity(updatePostDto);
//        ResponseEntity <Post> response=testRestTemplate.exchange(url,HttpMethod.PUT,entity,Post.class);
//
//        //Then
//        assertThat(response.getStatusCode(),is(HttpStatus.OK));
//        assertThat(response.getBody(),is());
//
//    }



}
