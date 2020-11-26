package de.neuefische.hh2020j1.spontaneity.service;

import de.neuefische.hh2020j1.spontaneity.dao.PostDao;
import de.neuefische.hh2020j1.spontaneity.dto.AddPostDto;
import de.neuefische.hh2020j1.spontaneity.dto.SendPostDto;
import de.neuefische.hh2020j1.spontaneity.model.Post;
import de.neuefische.hh2020j1.spontaneity.utils.IdUtils;
import de.neuefische.hh2020j1.spontaneity.utils.ParseUtils;
import de.neuefische.hh2020j1.spontaneity.utils.TimestampUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.time.ZoneId;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PostService {
    private final PostDao postDao;
    private final MongoTemplate mongoTemplate;
    private final IdUtils idUtils;
    private final TimestampUtils timestampUtils;

    @Autowired
    public PostService(PostDao postDao, MongoTemplate mongoTemplate, IdUtils idUtils, TimestampUtils timestampUtils) {
        this.postDao = postDao;
        this.mongoTemplate = mongoTemplate;
        this.idUtils = idUtils;
        this.timestampUtils = timestampUtils;
    }

    public List<SendPostDto> getPostsSortedByTimeWithoutUsersPosts(String principalName) {
        Query querySortForTime = new Query();
        querySortForTime.with(Sort.by(Sort.Direction.ASC,"startPoint"));
        List<Post> posts = mongoTemplate.find(querySortForTime, Post.class);

        List<Post> postsWithoutCreator=posts.stream()
                .filter(post->(!post.getCreator().equals(principalName)))
                        .collect(Collectors.toList());

        List<SendPostDto>sendPosts=ParseUtils.parseToSendPostDto(postsWithoutCreator);
        return sendPosts;
    }

    public List<SendPostDto> getPostsOfUser(String principalName){
        Query queryPostsForUser = new Query();
        queryPostsForUser.with(Sort.by(Sort.Direction.ASC,"startPoint"));
        queryPostsForUser.addCriteria(Criteria.where("creator").is(principalName));
        List<Post>userPosts=mongoTemplate.find(queryPostsForUser, Post.class);

        List<SendPostDto>sendPosts= ParseUtils.parseToSendPostDto(userPosts);
        return sendPosts;

    }


    public Post addPost(String principalName, AddPostDto postToAdd) {
        Post postToSave = Post.builder()
                .id(idUtils.generateId())
                .creator(principalName)
                .startPoint(postToAdd.getLocalDate().atTime(postToAdd.getStartPoint()).atZone(ZoneId.of("Europe/Berlin")).toInstant())
                .endPoint(postToAdd.getLocalDate().atTime(postToAdd.getEndPoint()).atZone(ZoneId.of("Europe/Berlin")).toInstant())
                .statusTime(postToAdd.getStatusTime())
                .location(postToAdd.getLocation())
                .statusLocation(postToAdd.getStatusLocation())
                .category(postToAdd.getCategory())
                .statusCategory(postToAdd.getStatusCategory())
                .notes(postToAdd.getNotes())
                .timestamp(timestampUtils.generateTimestampInstant())
                .build();

        return postDao.save(postToSave);
    }
}
