package de.neuefische.hh2020j1.spontaneity.service;

import de.neuefische.hh2020j1.spontaneity.dao.PostDao;
import de.neuefische.hh2020j1.spontaneity.dto.FriendDto;
import de.neuefische.hh2020j1.spontaneity.model.SpontaneityUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FriendsService {

    private final PostDao postDao;
    private final MongoTemplate mongoTemplate;

    @Autowired
    public FriendsService(PostDao postDao, MongoTemplate mongoTemplate) {
        this.postDao = postDao;
        this.mongoTemplate = mongoTemplate;
    }

    public List<FriendDto> getFriends(String principalName) {
        Query queryGetUser = new Query();
        queryGetUser.addCriteria(Criteria.where("username").is(principalName));
        SpontaneityUser user =(mongoTemplate.find(queryGetUser, SpontaneityUser.class)).get(0);
        return user.getFriends();
    }

    public FriendDto addFriend(String principalName, String friendUsername) {
        //get friend from database

        findbyid?
//        Query queryGetFriend = new Query();
//        queryGetFriend.addCriteria(Criteria.where("username").is(friendUsername));
//        SpontaneityUser friend=(mongoTemplate.find(queryGetFriend, SpontaneityUser.class)).get(0);

        //checken ob leer


        List <FriendDto>friends=getFriends(principalName);
        friends.add()
    }
}
