package de.neuefische.hh2020j1.spontaneity.service;


import de.neuefische.hh2020j1.spontaneity.dao.PostDao;
import de.neuefische.hh2020j1.spontaneity.dto.SendPostDto;
import de.neuefische.hh2020j1.spontaneity.model.Post;
import de.neuefische.hh2020j1.spontaneity.utils.ParseUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostUserService {

    private final PostDao postDao;
    private final MongoTemplate mongoTemplate;

    @Autowired
    public PostUserService(PostDao postDao, MongoTemplate mongoTemplate) {
        this.postDao = postDao;
        this.mongoTemplate = mongoTemplate;
    }

        public List<SendPostDto> getPostsOfUser(String principalName){
        Query queryPostsForUser = new Query();
        queryPostsForUser.addCriteria(Criteria.where("creator").is(principalName));
        List<Post>userPosts=mongoTemplate.find(queryPostsForUser, Post.class);

        List<SendPostDto>sendPosts= ParseUtils.parseToSendPostDto(userPosts);
        return sendPosts;

    }

}
