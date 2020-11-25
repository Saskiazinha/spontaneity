package de.neuefische.hh2020j1.spontaneity.service;

import de.neuefische.hh2020j1.spontaneity.dao.PostDao;
import de.neuefische.hh2020j1.spontaneity.dto.SendPostDto;
import de.neuefische.hh2020j1.spontaneity.model.Post;
import de.neuefische.hh2020j1.spontaneity.seeder.PostSeeder;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import java.util.List;
import static org.mockito.Mockito.*;


class PostServiceTest {

    private final PostDao postDao=mock(PostDao.class);
    private final MongoTemplate mongoTemplate=mock(MongoTemplate.class);
    private final PostService postService=new PostService(postDao, mongoTemplate);

    @Test
    @DisplayName("The \"getPostsSortedByTime\" method should return posts in the order of their startPoint excluding posts of logged in user")
    void getPostsSortedByTimeWithoutUsersPostsTest(){
        //Given
        Query querySortByTime = new Query();
        querySortByTime.with(Sort.by(Sort.Direction.ASC,"startPoint"));
        when(mongoTemplate.find(querySortByTime, Post.class)).thenReturn(PostSeeder.getStockPostsSorted());
        String principleName="Franzi";

        //When
        List<SendPostDto> allPosts= postService.getPostsSortedByTimeWithoutUsersPosts(principleName);

        //Then
        assertThat(allPosts,is(PostSeeder.getStockSendPostsDtoSortedWithoutPrincipal()));
    }

    @Test
    @DisplayName("The \"getPostsOfUser\" method should return sorted posts of logged in user")
    void getPostsOfUser(){
        //Given
        String principalName="Franzi";
        Query queryPostsForUser = new Query();
        queryPostsForUser.with(Sort.by(Sort.Direction.ASC,"startPoint"));
        queryPostsForUser.addCriteria(Criteria.where("creator").is(principalName));
        when(mongoTemplate.find(queryPostsForUser, Post.class)).thenReturn(PostSeeder.getStockPostsSortedForPrincipal());
        String principleName="Franzi";

        //When
        List<SendPostDto> userPosts= postService.getPostsOfUser(principleName);

        //Then
        assertThat(userPosts,is(PostSeeder.getStockSendPostsDtoSortedForPrincipal()));
    }

}