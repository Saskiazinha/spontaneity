package de.neuefische.hh2020j1.spontaneity.service;

import de.neuefische.hh2020j1.spontaneity.dao.PostDao;
import de.neuefische.hh2020j1.spontaneity.dto.AddPostDto;
import de.neuefische.hh2020j1.spontaneity.dto.SendPostDto;
import de.neuefische.hh2020j1.spontaneity.dto.UpdatePostDto;
import de.neuefische.hh2020j1.spontaneity.model.Post;
import de.neuefische.hh2020j1.spontaneity.seeder.PostSeeder;
import de.neuefische.hh2020j1.spontaneity.utils.*;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;


class PostServiceTest {

    private final IdUtils idUtils=mock(IdUtils.class);
    private final TimestampUtils timestampUtils=mock(TimestampUtils.class);

    private final PostDao postDao=mock(PostDao.class);
    private final MongoTemplate mongoTemplate=mock(MongoTemplate.class);
    private final PostService postService=new PostService(postDao, mongoTemplate, idUtils, timestampUtils);

    @Test
    @DisplayName("The \"getFriendsPostsTest\" method should return posts in the order of their startPoint excluding posts of logged in user")
    void getFriendsPostsTest(){
        //Given
        Query querySortByTime = new Query();
        querySortByTime.with(Sort.by(Sort.Direction.ASC,"startPoint"));
        when(mongoTemplate.find(querySortByTime, Post.class)).thenReturn(PostSeeder.getStockPostsSorted());
        String principleName="Franzi";

        //When
        List<Post> allPosts= postService.getFriendsPosts(principleName);

        //Then
        assertThat(allPosts,is(PostSeeder.getStockPostsSortedWithoutPrincipal()));
    }

    @Test
    @DisplayName("The \"getPostsOfUser\" method should return sorted posts of logged in user")
    void getPostsOfUserTest(){
        //Given
        String principalName="Franzi";
        Query queryPostsForUser = new Query();
        queryPostsForUser.with(Sort.by(Sort.Direction.ASC,"startPoint"));
        queryPostsForUser.addCriteria(Criteria.where("creator").is(principalName));
        when(mongoTemplate.find(queryPostsForUser, Post.class)).thenReturn(PostSeeder.getStockPostsSortedForPrincipal());
        String principleName="Franzi";

        //When
        List<Post> userPosts= postService.getPostsOfUser(principleName);

        //Then
        assertThat(userPosts,is(PostSeeder.getStockPostsSortedForPrincipal()));
    }

    @Test
    @DisplayName("The \"getMatchingPostsTest\" method should return a List of friends posts that timewise overlap with users posts")
    void getMatchingPostsTest(){
        //Given
        String principalName="Franzi";
        Query querySortByTime = new Query();
        querySortByTime.with(Sort.by(Sort.Direction.ASC,"startPoint"));
        when(mongoTemplate.find(querySortByTime, Post.class)).thenReturn(PostSeeder.getStockPostsSorted());
        Query queryPostsForUser = new Query();
        queryPostsForUser.with(Sort.by(Sort.Direction.ASC,"startPoint"));
        queryPostsForUser.addCriteria(Criteria.where("creator").is(principalName));
        when(mongoTemplate.find(queryPostsForUser, Post.class)).thenReturn(PostSeeder.getStockPostsSortedForPrincipal());

        //When
        List<Post> matchingPosts= postService.getMatchingPosts(principalName);

        //Then
        assertThat(matchingPosts,is(PostSeeder.getStockFilteredPosts()));
    }




    @Test
    @DisplayName("The \"addPost\" method should return the added Post")
    void addPostTest(){
        //Given
        String idExpected="expectedId";
        Instant instantExpected= Instant.parse("2020-11-26T10:00:00Z");
        String principalName="Franzi";

        AddPostDto addPostDto= new AddPostDto(LocalDate.of(2020,11,25), LocalTime.of(14,00),LocalTime.of(16,00), EnumStatus.YELLOW,"Altona", EnumStatus.BLUE, EnumCategory.Meal ,EnumStatus.GREEN, "I would like to have a dinner out");

        Post post=new Post("expectedId", principalName, Instant.parse("2020-11-25T13:00:00Z"), Instant.parse("2020-11-25T15:00:00Z"),EnumStatus.YELLOW,"Altona" , EnumStatus.BLUE, EnumCategory.Meal,EnumStatus.GREEN, "I would like to have a dinner out", instantExpected);
        SendPostDto sendPost=ParseUtils.parseToSendPostDto(post);

        when(idUtils.generateId()).thenReturn(idExpected);
        when(timestampUtils.generateTimestampInstant()).thenReturn(instantExpected);
        when(postDao.save(post)).thenReturn(post);

        //When
        SendPostDto newPost=postService.addPost(principalName,addPostDto);

        //Then
        assertThat(newPost,is(sendPost));
        verify(postDao).save(post);
    }

    @Test
    @DisplayName("The \"updatePost\" method should return the updated Post")
    void updatePostTest(){
        //Given
        String id="someId";
        Instant instant= Instant.parse("2020-11-26T10:00:00Z");
        Instant newInstant= Instant.parse("2020-11-26T11:00:00Z");
        String principalName="Franzi";

        UpdatePostDto updatePostDto= new UpdatePostDto(id,LocalDate.of(2020,11,25), LocalTime.of(14,00),LocalTime.of(16,00), EnumStatus.GREEN,"Altona", EnumStatus.BLUE, EnumCategory.Meal ,EnumStatus.BLUE, "I would like to have a dinner out");

        Post oldPost=new Post(id, principalName, Instant.parse("2020-11-25T13:00:00Z"), Instant.parse("2020-11-25T15:00:00Z"),EnumStatus.YELLOW,"Altona" , EnumStatus.BLUE, EnumCategory.Meal,EnumStatus.GREEN, "I would like to have a dinner out", instant);

        Post updatedPost=new Post(id, principalName, Instant.parse("2020-11-25T13:00:00Z"), Instant.parse("2020-11-25T15:00:00Z"),EnumStatus.GREEN,"Altona" , EnumStatus.BLUE, EnumCategory.Meal,EnumStatus.BLUE, "I would like to have a dinner out", newInstant);
        SendPostDto sendUpdatedPost =ParseUtils.parseToSendPostDto(updatedPost);

        when(timestampUtils.generateTimestampInstant()).thenReturn(newInstant);
        when(postDao.findById(id)).thenReturn(Optional.of(oldPost));
        when(postDao.save(updatedPost)).thenReturn(updatedPost);

        //When
        SendPostDto result=postService.updatePost(principalName,updatePostDto);

        //Then
        assertThat(result,is(sendUpdatedPost));
        verify(postDao).save(updatedPost);
    }


    @Test
    @DisplayName("The \"updatePost\" method should return Forbidden when user tries to update post of other user")
    void updatePostOfOtherUserTest(){
        //Given
        String id="someId";
        Instant instant= Instant.parse("2020-11-26T10:00:00Z");
        String principalName="Franzi";

        UpdatePostDto updatePostDto= new UpdatePostDto(id,LocalDate.of(2020,11,25), LocalTime.of(14,00),LocalTime.of(16,00), EnumStatus.GREEN,"Altona", EnumStatus.BLUE, EnumCategory.Meal ,EnumStatus.BLUE, "I would like to have a dinner out");

        Post oldPost=new Post(id, principalName, Instant.parse("2020-11-25T13:00:00Z"), Instant.parse("2020-11-25T15:00:00Z"),EnumStatus.YELLOW,"Altona" , EnumStatus.BLUE, EnumCategory.Meal,EnumStatus.GREEN, "I would like to have a dinner out", instant);

        when(postDao.findById(id)).thenReturn(Optional.of(oldPost));

        //When
        try{
            postService.updatePost("Eva",updatePostDto);
        } catch (ResponseStatusException e){
            assertThat(e.getStatus(), is(HttpStatus.FORBIDDEN));
        }
    }

    @Test
    @DisplayName("The \"updatePost\" method should return Not Found when user tries to update not existing idea")
    void updateNotExistingPostTest(){
        //Given
        String id="someId";
        String principalName="Franzi";

        UpdatePostDto updatePostDto= new UpdatePostDto(id,LocalDate.of(2020,11,25), LocalTime.of(14,00),LocalTime.of(16,00), EnumStatus.GREEN,"Altona", EnumStatus.BLUE, EnumCategory.Meal ,EnumStatus.BLUE, "I would like to have a dinner out");

        when(postDao.findById(id)).thenReturn(Optional.empty());

        //When
        try{
            postService.updatePost(principalName,updatePostDto);
        } catch (ResponseStatusException e){
            assertThat(e.getStatus(), is(HttpStatus.NOT_FOUND));
        }

    }

    @Test
    @DisplayName("The \"deletePost\" method should delete post")
    void deletePostTest(){
        //Given
        String id="someId";
        String principalName="Franzi";
        Instant instant= Instant.parse("2020-11-26T10:00:00Z");

        Post post=new Post(id, principalName, Instant.parse("2020-11-25T13:00:00Z"), Instant.parse("2020-11-25T15:00:00Z"),EnumStatus.YELLOW,"Altona" , EnumStatus.BLUE, EnumCategory.Meal,EnumStatus.GREEN, "I would like to have a dinner out", instant);

        when(postDao.findById(id)).thenReturn(Optional.of(post));

        //When
        postService.deletePost(principalName,id);

        //Then
        verify(postDao).deleteById(id);
    }

    @Test
    @DisplayName("The \"deletePost\" method should return Not Found when user tries to delete not existing idea")
    void deleteNotExistingPostTest(){
        //Given
        String id="someId";
        String principalName="Franzi";

        when(postDao.findById(id)).thenReturn(Optional.empty());

        //When
        try{
            postService.deletePost(principalName,id);
        } catch(ResponseStatusException e){
            assertThat(e.getStatus(),is(HttpStatus.NOT_FOUND));
        }
    }

    @Test
    @DisplayName("The \"deletePost\" method should return Forbidden when user tries to delete idea of other user")
    void deletePostOfOtherUserTest(){
        //Given
        String id="someId";
        String principalName="Franzi";
        Instant instant= Instant.parse("2020-11-26T10:00:00Z");

        Post post=new Post(id, principalName, Instant.parse("2020-11-25T13:00:00Z"), Instant.parse("2020-11-25T15:00:00Z"),EnumStatus.YELLOW,"Altona" , EnumStatus.BLUE, EnumCategory.Meal,EnumStatus.GREEN, "I would like to have a dinner out", instant);

        when(postDao.findById(id)).thenReturn(Optional.of(post));

        //When
        try{
            postService.deletePost("Eva",id);
        } catch(ResponseStatusException e){
            assertThat(e.getStatus(),is(HttpStatus.FORBIDDEN));
        }
    }



}