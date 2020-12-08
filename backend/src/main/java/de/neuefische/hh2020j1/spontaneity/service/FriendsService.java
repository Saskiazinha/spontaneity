package de.neuefische.hh2020j1.spontaneity.service;

import com.mongodb.BasicDBObject;
import de.neuefische.hh2020j1.spontaneity.dao.UserDao;
import de.neuefische.hh2020j1.spontaneity.dto.FriendDto;
import de.neuefische.hh2020j1.spontaneity.model.SpontaneityUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;


@Service
public class FriendsService {

    private final UserDao userDao;
    private final MongoTemplate mongoTemplate;

    @Autowired
    public FriendsService(UserDao userDao, MongoTemplate mongoTemplate) {
        this.userDao = userDao;
        this.mongoTemplate = mongoTemplate;
    }

    public List<FriendDto> getFriends(String principalName) {
        return userDao.findById(principalName).get().getFriends();
    }

    public FriendDto addFriend(String principalName, String friendUsername) {
        SpontaneityUser userToAdd=userDao.findById(friendUsername).orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND));
        FriendDto friendToAdd= new FriendDto(userToAdd.getUsername(),userToAdd.getFirstName(),userToAdd.getLastName());

        Query query = new Query();
        query.addCriteria(Criteria.where("username").is(principalName));

        Update update=new Update();
        update.addToSet("friends",friendToAdd);

        mongoTemplate.updateFirst(query, update,SpontaneityUser.class);

        return friendToAdd;
    }

    public void deleteFriend(String principalName, String friendUsername) {
        Query query = new Query (new Criteria().andOperator(
                Criteria.where("username").is(principalName),
                Criteria.where("friends").elemMatch(Criteria.where("username").is(friendUsername))
        ));

        Update update=new Update();
        update.pull("friends", new BasicDBObject("username",friendUsername));

        mongoTemplate.updateFirst(query, update, SpontaneityUser.class);
    }

}
