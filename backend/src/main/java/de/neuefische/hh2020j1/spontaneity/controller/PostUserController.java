package de.neuefische.hh2020j1.spontaneity.controller;

import de.neuefische.hh2020j1.spontaneity.dto.SendPostDto;
import de.neuefische.hh2020j1.spontaneity.service.PostUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("api/myposts")
public class PostUserController {

    private final PostUserService postUserService;

    @Autowired
    public PostUserController(PostUserService postUserService) {
        this.postUserService = postUserService;
    }

    @GetMapping
    public List<SendPostDto> getPostsOfUser(Principal principal){
        return postUserService.getPostsOfUser(principal.getName());
    }
}
