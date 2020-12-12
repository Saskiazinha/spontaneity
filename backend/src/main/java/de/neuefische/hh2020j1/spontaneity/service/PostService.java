package de.neuefische.hh2020j1.spontaneity.service;

import de.neuefische.hh2020j1.spontaneity.dao.PostDao;
import de.neuefische.hh2020j1.spontaneity.dao.UserDao;
import de.neuefische.hh2020j1.spontaneity.dto.AddPostDto;
import de.neuefische.hh2020j1.spontaneity.dto.FriendDto;
import de.neuefische.hh2020j1.spontaneity.dto.SendPostDto;
import de.neuefische.hh2020j1.spontaneity.dto.UpdatePostDto;
import de.neuefische.hh2020j1.spontaneity.model.Post;
import de.neuefische.hh2020j1.spontaneity.utils.IdUtils;
import de.neuefische.hh2020j1.spontaneity.utils.ParseUtils;
import de.neuefische.hh2020j1.spontaneity.utils.TimestampUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.ZoneId;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class PostService {
    private final PostDao postDao;
    private final UserDao userDao;
    private final FriendsService friendsService;
    private final MongoTemplate mongoTemplate;
    private final IdUtils idUtils;
    private final TimestampUtils timestampUtils;

    @Autowired
    public PostService(PostDao postDao, UserDao userDao, FriendsService friendsService, MongoTemplate mongoTemplate, IdUtils idUtils, TimestampUtils timestampUtils) {
        this.postDao = postDao;
        this.userDao = userDao;
        this.friendsService = friendsService;
        this.mongoTemplate = mongoTemplate;
        this.idUtils = idUtils;
        this.timestampUtils = timestampUtils;
    }

    public List<Post> getFriendsPosts(String principalName) {
        Query querySortForTime = new Query();
        querySortForTime.with(Sort.by(Sort.Direction.ASC, "startPoint"));
        List<Post> posts = mongoTemplate.find(querySortForTime, Post.class);

        List<String> friendsUsernames = friendsService.getFriends(principalName).stream().map(FriendDto::getUsername).collect(Collectors.toList());
        return posts.stream()
                .filter((post) -> friendsUsernames.contains(post.getCreator()))
                .collect(Collectors.toList());
    }

    public List<Post> getPostsOfUser(String principalName) {
        Query queryPostsForUser = new Query();
        queryPostsForUser.with(Sort.by(Sort.Direction.ASC, "startPoint"));
        queryPostsForUser.addCriteria(Criteria.where("creator").is(principalName));

        return mongoTemplate.find(queryPostsForUser, Post.class);

    }

    public List<Post> getMatchingPosts(String principalName) {
        List<Post>userPosts=getPostsOfUser(principalName);
        List<Post>friendsPosts= getFriendsPosts(principalName);

        return friendsPosts.stream().filter(friendPost-> postTimewiseMatchesAnyUserPost(friendPost, userPosts)).collect(Collectors.toList());
    }


    private boolean postTimewiseMatchesAnyUserPost(Post friendPost, List<Post> userPosts) {
        return userPosts.stream().anyMatch((userPost) -> friendPost.getStartPoint().isBefore(userPost.getEndPoint()) && friendPost.getEndPoint().isAfter(userPost.getStartPoint()));
    }


    public SendPostDto addPost(String principalName, AddPostDto postToBeAdded) {
        Post postToSave = Post.builder()
                .id(idUtils.generateId())
                .creator(principalName)
                .firstName(getUserName(principalName))
                .title(postToBeAdded.getTitle())
                .startPoint(postToBeAdded.getLocalDate().atTime(postToBeAdded.getStartPoint()).atZone(ZoneId.of("Europe/Berlin")).toInstant())
                .endPoint(postToBeAdded.getLocalDate().atTime(postToBeAdded.getEndPoint()).atZone(ZoneId.of("Europe/Berlin")).toInstant())
                .statusTime(postToBeAdded.getStatusTime())
                .address(postToBeAdded.getAddress())
                .district(postToBeAdded.getDistrict())
                .lat(postToBeAdded.getLat())
                .lng(postToBeAdded.getLng())
                .statusLocation(postToBeAdded.getStatusLocation())
                .category(postToBeAdded.getCategory())
                .statusCategory(postToBeAdded.getStatusCategory())
                .notes(postToBeAdded.getNotes())
                .timestamp(timestampUtils.generateTimestampInstant())
                .build();

        postDao.save(postToSave);
        return ParseUtils.parseToSendPostDto(postToSave);
    }

    public String getUserName(String principalName) {
        return userDao.findById(principalName).get().getFirstName();
    }


    public SendPostDto updatePost(String principalName, UpdatePostDto postUpdate) {
        Post postToBeUpdated = postDao.findById(postUpdate.getId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));

        if (!Objects.equals(principalName, postToBeUpdated.getCreator())) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN);
        }

        Post updatedPost = Post.builder()
                .id(postUpdate.getId())
                .creator(principalName)
                .firstName(getUserName(principalName))
                .title(postUpdate.getTitle())
                .startPoint(postUpdate.getLocalDate().atTime(postUpdate.getStartPoint()).atZone(ZoneId.of("Europe/Berlin")).toInstant())
                .endPoint(postUpdate.getLocalDate().atTime(postUpdate.getEndPoint()).atZone(ZoneId.of("Europe/Berlin")).toInstant())
                .statusTime(postUpdate.getStatusTime())
                .address(postUpdate.getAddress())
                .district(postUpdate.getDistrict())
                .lat(postUpdate.getLat())
                .lng(postUpdate.getLng())
                .statusLocation(postUpdate.getStatusLocation())
                .category(postUpdate.getCategory())
                .statusCategory(postUpdate.getStatusCategory())
                .notes(postUpdate.getNotes())
                .timestamp(timestampUtils.generateTimestampInstant())
                .build();

        postDao.save(updatedPost);
        return ParseUtils.parseToSendPostDto(updatedPost);
    }

    public void deletePost(String principalName, String postId) {
        Post postToDelete = postDao.findById(postId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));

        if (!Objects.equals(principalName, postToDelete.getCreator())) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN);
        }

        postDao.deleteById(postId);
    }

}


