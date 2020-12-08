package de.neuefische.hh2020j1.spontaneity.service;

import de.neuefische.hh2020j1.spontaneity.dao.UserDao;
import de.neuefische.hh2020j1.spontaneity.dto.FriendDto;
import de.neuefische.hh2020j1.spontaneity.model.SpontaneityUser;
import de.neuefische.hh2020j1.spontaneity.seeder.FriendSeeder;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.*;


public class FriendsServiceTest {

    private final UserDao userDao=mock(UserDao.class);
    private final MongoTemplate mongoTemplate=mock(MongoTemplate.class);
    private final FriendsService friendsService= new FriendsService (userDao,mongoTemplate);

    @Test
    @DisplayName("The \"getFriendsTest\" method should return the friends of the logged in user")
    void getFriendsTest(){
        SpontaneityUser user=SpontaneityUser.builder().friends(FriendSeeder.getStockFriends()).build();
        //Given
        when(userDao.findById("Franzi")).thenReturn(Optional.of(user));

        //When
        List<FriendDto> friends= friendsService.getFriends("Franzi");

        //Then
        assertThat(friends,is(FriendSeeder.getStockFriends()));
    }

    @Test
    @DisplayName("The \"addFriendTest\" method should return the friend that the user wants to add")
    void addFriendTest(){
        //Given
        when(userDao.findById("carsten123")).thenReturn(Optional.of(FriendSeeder.getStockSpontaneityUser()));

        //When
        FriendDto friend= friendsService.addFriend("Franzi", "carsten123");

        //Then
        assertThat(friend,is(FriendSeeder.getStockFriendDto()));
    }

    @Test
    @DisplayName("The \"addFriend\" method with not existing user should throw Not Found")
    void addFriendUserNotFoundTest(){
        //Given
        when(userDao.findById("carsten123")).thenReturn(Optional.of(FriendSeeder.getStockSpontaneityUser()));

        //When
        try{
            friendsService.addFriend("Franzi", "noUser");
        } catch (ResponseStatusException e) {
            assertThat(e.getStatus(),is(HttpStatus.NOT_FOUND));
        }
    }

}
