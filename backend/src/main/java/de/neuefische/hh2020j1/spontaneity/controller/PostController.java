package de.neuefische.hh2020j1.spontaneity.controller;


import de.neuefische.hh2020j1.spontaneity.dto.AddPostDto;
import de.neuefische.hh2020j1.spontaneity.dto.SendPostDto;
import de.neuefische.hh2020j1.spontaneity.dto.UpdatePostDto;
import de.neuefische.hh2020j1.spontaneity.model.Post;
import de.neuefische.hh2020j1.spontaneity.service.PostService;
import de.neuefische.hh2020j1.spontaneity.utils.ParseUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/posts")
public class PostController {

    private final PostService postService;

    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping
    public List<SendPostDto> getFriendsPosts(Principal principal){
        List<Post> friendsPosts= postService.getFriendsPosts(principal.getName());
        return ParseUtils.parseToSendPostDtos(friendsPosts);
    }

    @GetMapping("myposts")
    public List<SendPostDto> getPostsOfUser(Principal principal){
         List<Post>userPosts=postService.getPostsOfUser(principal.getName());
        return ParseUtils.parseToSendPostDtos(userPosts);
    }

    @GetMapping("matching")
    public List<SendPostDto> getMatchingPosts(Principal principal){
        List<Post> matchingPosts = postService.getMatchingPosts(principal.getName());
        return ParseUtils.parseToSendPostDtos(matchingPosts);
    }

    @PostMapping
    public SendPostDto addPost (@RequestBody AddPostDto dto, Principal principal){
        return postService.addPost(principal.getName(),dto);
    }

    @PutMapping ("{postId}")
    public SendPostDto updatePost (@RequestBody UpdatePostDto dto, @PathVariable String postId, Principal principal){
        if(!postId.equals(dto.getId())){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }

        return postService.updatePost(principal.getName(),dto);
    }

    @DeleteMapping ("{postId}")
    public void deletePost (@PathVariable String postId, Principal principal){
        postService.deletePost(principal.getName(),postId);
    }
}
