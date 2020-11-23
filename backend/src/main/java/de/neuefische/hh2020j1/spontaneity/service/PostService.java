package de.neuefische.hh2020j1.spontaneity.service;

import de.neuefische.hh2020j1.spontaneity.dao.PostDao;
import de.neuefische.hh2020j1.spontaneity.dto.SendPostDto;
import de.neuefische.hh2020j1.spontaneity.model.Post;
import de.neuefische.hh2020j1.spontaneity.utils.ParseUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PostService {
    private final PostDao postDao;
    private final MongoTemplate mongoTemplate;

    @Autowired
    public PostService(PostDao postDao, MongoTemplate mongoTemplate) {
        this.postDao = postDao;
        this.mongoTemplate = mongoTemplate;
    }

    public List<SendPostDto> getIdeasSortedByTime() {
        Query querySortByTime = new Query();
        querySortByTime.with(Sort.by(Sort.Direction.ASC,"startPoint"));

        List<Post> posts = mongoTemplate.find(querySortByTime, Post.class);
        List<SendPostDto>sendPosts=ParseUtils.parseToSendPostDto(posts);
        return sendPosts;
    }
}
