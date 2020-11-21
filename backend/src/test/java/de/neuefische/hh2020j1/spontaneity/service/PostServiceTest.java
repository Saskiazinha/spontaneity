package de.neuefische.hh2020j1.spontaneity.service;

import de.neuefische.hh2020j1.spontaneity.dao.PostDao;
import de.neuefische.hh2020j1.spontaneity.dto.SendPostDto;
import de.neuefische.hh2020j1.spontaneity.model.Post;
import de.neuefische.hh2020j1.spontaneity.seeder.PostSeeder;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import java.util.List;
import static org.mockito.Mockito.*;


class PostServiceTest {

    private final PostDao postDao=mock(PostDao.class);
    private final MongoTemplate mongoTemplate=mock(MongoTemplate.class);
    private final PostService postService=new PostService(postDao, mongoTemplate);

//    @Test
//    @DisplayName("The \"getIdeasSortedByTime\" method should return posts in the order of their startPoint")
//    void getIdeasSortedByTimeTest(){
//        //Given
//        Query querySortByTime = new Query();
//        when(mongoTemplate.find(querySortByTime, Post.class)).thenReturn(PostSeeder.getStockPostsSorted());
//
//        //When
//        List<SendPostDto> allPosts= postService.getIdeasSortedByTime();
//
//        //Then
//        assertThat(allPosts,is(PostSeeder.getStockSendPostsDtoSorted()));
//    }
}