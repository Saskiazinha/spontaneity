package de.neuefische.hh2020j1.spontaneity.utils;

import de.neuefische.hh2020j1.spontaneity.dto.SendPostDto;
import de.neuefische.hh2020j1.spontaneity.model.Post;

import java.time.*;
import java.util.List;
import java.util.stream.Collectors;

public class ParseUtils {

    public static List<SendPostDto> parseToSendPostDtos(List<Post>posts){

       return posts.stream()
                .map(post->new SendPostDto(
                        post.getId(),
                        post.getCreator(),
                        post.getFirstName(),
                        post.getTitle(),
                        LocalDate.ofInstant(post.getStartPoint(), ZoneId.of("Europe/Berlin")),
                        LocalTime.ofInstant(post.getStartPoint(),ZoneId.of("Europe/Berlin")),
                        LocalTime.ofInstant(post.getEndPoint(),ZoneId.of("Europe/Berlin")),
                        post.getStatusTime(),
                        post.getAddress(),
                        post.getDistrict(),
                        post.getLat(),
                        post.getLng(),
                        post.getStatusLocation(),
                        post.getCategory(),
                        post.getStatusCategory(),
                        post.getNotes(),
                        LocalDateTime.ofInstant(post.getTimestamp(),ZoneId.of("Europe/Berlin"))))
                        .collect(Collectors.toList());


    }


    public static SendPostDto parseToSendPostDto(Post post){
        return new SendPostDto(
                post.getId(),
                post.getCreator(),
                post.getFirstName(),
                post.getTitle(),
                LocalDate.ofInstant(post.getStartPoint(), ZoneId.of("Europe/Berlin")),
                LocalTime.ofInstant(post.getStartPoint(),ZoneId.of("Europe/Berlin")),
                LocalTime.ofInstant(post.getEndPoint(),ZoneId.of("Europe/Berlin")),
                post.getStatusTime(),
                post.getAddress(),
                post.getDistrict(),
                post.getLat(),
                post.getLat(),
                post.getStatusLocation(),
                post.getCategory(),
                post.getStatusCategory(),
                post.getNotes(),
                LocalDateTime.ofInstant(post.getTimestamp(),ZoneId.of("Europe/Berlin")));

    }


}

