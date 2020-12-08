package de.neuefische.hh2020j1.spontaneity.controller;


import de.neuefische.hh2020j1.spontaneity.dto.FriendDto;
import de.neuefische.hh2020j1.spontaneity.service.FriendsService;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/friends")
public class FriendsController {

    private final FriendsService friendsService;

    public FriendsController(FriendsService friendsService) {
        this.friendsService = friendsService;
    }

    @GetMapping
    public List<FriendDto> getFriends (Principal principal){
        return friendsService.getFriends(principal.getName());
    }

    @PostMapping
    public FriendDto addFriend (@RequestBody String friendUsername, Principal principal){
        return friendsService.addFriend(principal.getName(), friendUsername);
    }

    @DeleteMapping
    public void deleteFriend (@RequestBody String friendUsername, Principal principal){
        friendsService.deleteFriend(principal.getName(),friendUsername);
    }

}
