package de.neuefische.hh2020j1.spontaneity.seeder;

import de.neuefische.hh2020j1.spontaneity.dto.SendPostDto;
import de.neuefische.hh2020j1.spontaneity.model.Location;
import de.neuefische.hh2020j1.spontaneity.model.Post;
import de.neuefische.hh2020j1.spontaneity.model.EnumCategory;
import de.neuefische.hh2020j1.spontaneity.model.EnumStatus;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

public class PostSeeder {

    public static final List<Post> getStockPostsSorted(){
        return new ArrayList<>(List.of(
                new Post("111", "Franzi","Drink out", Instant.parse("2020-11-20T09:00:00.00Z"), Instant.parse("2020-11-20T10:00:00.00Z"),EnumStatus.GREEN,Location.builder().district("Sternschanze").build(), EnumStatus.BLUE, EnumCategory.Drinks, EnumStatus.YELLOW, "I would like to have a drink out", Instant.parse("2020-11-20T10:56:04Z")),
                new Post("222", "Rebekka","Getting active", Instant.parse("2020-11-20T09:30:00.00Z"), Instant.parse("2020-11-20T12:30:00.00Z"),EnumStatus.YELLOW,Location.builder().district("Altona").build(), EnumStatus.YELLOW, EnumCategory.Exercise,EnumStatus.GREEN, "I would like to do some exercise", Instant.parse("2020-11-20T10:56:04Z")),
                new Post("333", "Janosch","Catching dinner", Instant.parse("2020-11-21T12:00:00.00Z"), Instant.parse("2020-11-21T13:00:00.00Z"),EnumStatus.GREEN,Location.builder().district("Barmbek").build(), EnumStatus.GREEN, EnumCategory.Meal,EnumStatus.BLUE, "I would like to have a dinner out", Instant.parse("2020-11-20T10:56:04Z")),
                new Post("444", "Carsten","Music", Instant.parse("2020-11-22T15:00:00.00Z"), Instant.parse("2020-11-22T17:00:00.00Z"),EnumStatus.GREEN,Location.builder().district("Sternschanze").build() , EnumStatus.YELLOW, EnumCategory.Events,EnumStatus.BLUE, "I would like to go to a concert", Instant.parse("2020-11-20T10:56:04Z")),
                new Post("555", "Franzi","Drink out", Instant.parse("2020-11-22T20:00:00.00Z"), Instant.parse("2020-11-22T22:00:00.00Z"),EnumStatus.GREEN,Location.builder().district("Eimsbüttel").build() , EnumStatus.GREEN, EnumCategory.Drinks,EnumStatus.YELLOW, "I would like to have a drink out", Instant.parse("2020-11-20T10:56:04Z"))
        ));
    }

    public static final List<Post> getStockPostsUnsorted(){
        return new ArrayList<>(List.of(
                new Post("333", "Janosch","Catching dinner", Instant.parse("2020-11-21T12:00:00.00Z"), Instant.parse("2020-11-21T13:00:00.00Z"),EnumStatus.GREEN,Location.builder().district("Barmbek").build() , EnumStatus.GREEN, EnumCategory.Meal,EnumStatus.BLUE, "I would like to have a dinner out", Instant.parse("2020-11-20T10:56:04Z")),
                new Post("555", "Franzi","Drink out", Instant.parse("2020-11-22T20:00:00.00Z"), Instant.parse("2020-11-22T22:00:00.00Z"),EnumStatus.GREEN,Location.builder().district("Eimsbüttel").build() , EnumStatus.GREEN, EnumCategory.Drinks,EnumStatus.YELLOW, "I would like to have a drink out", Instant.parse("2020-11-20T10:56:04Z")),
                new Post("111","Franzi", "Drink out", Instant.parse("2020-11-20T09:00:00.00Z"), Instant.parse("2020-11-20T10:00:00.00Z"),EnumStatus.GREEN,Location.builder().district("Sternschanze").build() , EnumStatus.BLUE, EnumCategory.Drinks,EnumStatus.YELLOW, "I would like to have a drink out", Instant.parse("2020-11-20T10:56:04Z")),
                new Post("222", "Rebekka","Getting active", Instant.parse("2020-11-20T09:30:00.00Z"), Instant.parse("2020-11-20T12:30:00.00Z"),EnumStatus.YELLOW,Location.builder().district("Altona").build() , EnumStatus.YELLOW, EnumCategory.Exercise,EnumStatus.GREEN, "I would like to do some exercise", Instant.parse("2020-11-20T10:56:04Z")),
                new Post("444", "Carsten","Music", Instant.parse("2020-11-22T15:00:00.00Z"), Instant.parse("2020-11-22T17:00:00.00Z"),EnumStatus.GREEN,Location.builder().district("Sternschanze").build() , EnumStatus.YELLOW, EnumCategory.Events,EnumStatus.BLUE, "I would like to go to a concert", Instant.parse("2020-11-20T10:56:04Z"))

        ));
    }

    public static final List<SendPostDto> getStockSendPostsDtoSorted(){
        return new ArrayList<SendPostDto>(List.of(
                new SendPostDto("111", "Franzi","Drink out", LocalDate.of(2020,11,20), LocalTime.of(10,00), LocalTime.of(11,00),EnumStatus.GREEN,Location.builder().district("Sternschanze").build() , EnumStatus.BLUE, EnumCategory.Drinks,EnumStatus.YELLOW, "I would like to have a drink out", Instant.parse("2020-11-20T10:56:04Z")),
                new SendPostDto("222", "Rebekka","Getting active", LocalDate.of(2020,11,20),LocalTime.of(10,30), LocalTime.of(13,30),EnumStatus.YELLOW,Location.builder().district("Altona").build() , EnumStatus.YELLOW, EnumCategory.Exercise,EnumStatus.GREEN, "I would like to do some exercise", Instant.parse("2020-11-20T10:56:04Z")),
                new SendPostDto("333", "Janosch","Catching dinner", LocalDate.of(2020,11,21),LocalTime.of(13,00), LocalTime.of(14,00),EnumStatus.GREEN,Location.builder().district("Barmbek").build() , EnumStatus.GREEN, EnumCategory.Meal,EnumStatus.BLUE, "I would like to have a dinner out", Instant.parse("2020-11-20T10:56:04Z")),
                new SendPostDto("444", "Carsten","Music", LocalDate.of(2020,11,22),LocalTime.of(16,00), LocalTime.of(18,00),EnumStatus.GREEN,Location.builder().district("Sternschanze").build() , EnumStatus.YELLOW, EnumCategory.Events,EnumStatus.BLUE, "I would like to go to a concert", Instant.parse("2020-11-20T10:56:04Z")),
                new SendPostDto("555", "Franzi","Drink out", LocalDate.of(2020,11,22),LocalTime.of(21,00), LocalTime.of(23,00),EnumStatus.GREEN,Location.builder().district("Eimsbüttel").build() , EnumStatus.GREEN, EnumCategory.Drinks,EnumStatus.YELLOW, "I would like to have a drink out", Instant.parse("2020-11-20T10:56:04Z"))
        ));
    }

    public static final List<Post> getStockPostsSortedWithoutPrincipal(){
        return new ArrayList<Post>(List.of(
                new Post("222", "Rebekka","Getting active", Instant.parse("2020-11-20T09:30:00.00Z"), Instant.parse("2020-11-20T12:30:00.00Z"),EnumStatus.YELLOW,Location.builder().district("Altona").build() , EnumStatus.YELLOW, EnumCategory.Exercise,EnumStatus.GREEN, "I would like to do some exercise", Instant.parse("2020-11-20T10:56:04Z")),
                new Post("333", "Janosch","Catching dinner", Instant.parse("2020-11-21T12:00:00.00Z"), Instant.parse("2020-11-21T13:00:00.00Z"),EnumStatus.GREEN,Location.builder().district("Barmbek").build() , EnumStatus.GREEN, EnumCategory.Meal,EnumStatus.BLUE, "I would like to have a dinner out", Instant.parse("2020-11-20T10:56:04Z")),
                new Post("444", "Carsten","Music", Instant.parse("2020-11-22T15:00:00.00Z"), Instant.parse("2020-11-22T17:00:00.00Z"),EnumStatus.GREEN,Location.builder().district("Sternschanze").build() , EnumStatus.YELLOW, EnumCategory.Events,EnumStatus.BLUE, "I would like to go to a concert", Instant.parse("2020-11-20T10:56:04Z"))
                 ));
    }

    public static final List<SendPostDto> getStockSendPostsDtoSortedWithoutPrincipal(){
        return new ArrayList<SendPostDto>(List.of(
                new SendPostDto("222", "Rebekka","Getting active", LocalDate.of(2020,11,20),LocalTime.of(10,30), LocalTime.of(13,30),EnumStatus.YELLOW,Location.builder().district("Altona").build() , EnumStatus.YELLOW, EnumCategory.Exercise,EnumStatus.GREEN, "I would like to do some exercise", Instant.parse("2020-11-20T10:56:04Z")),
                new SendPostDto("333","Janosch", "Catching dinner", LocalDate.of(2020,11,21),LocalTime.of(13,00), LocalTime.of(14,00),EnumStatus.GREEN,Location.builder().district("Barmbek").build() , EnumStatus.GREEN, EnumCategory.Meal,EnumStatus.BLUE, "I would like to have a dinner out", Instant.parse("2020-11-20T10:56:04Z")),
                new SendPostDto("444", "Carsten","Music", LocalDate.of(2020,11,22),LocalTime.of(16,00), LocalTime.of(18,00),EnumStatus.GREEN,Location.builder().district("Sternschanze").build() , EnumStatus.YELLOW, EnumCategory.Events,EnumStatus.BLUE, "I would like to go to a concert", Instant.parse("2020-11-20T10:56:04Z"))
        ));
    }

    public static final List<Post> getStockPostsSortedForPrincipal(){
        return new ArrayList<>(List.of(
                new Post("111", "Franzi","Drink out", Instant.parse("2020-11-20T09:00:00.00Z"), Instant.parse("2020-11-20T10:00:00.00Z"),EnumStatus.GREEN,Location.builder().district("Sternschanze").build() , EnumStatus.BLUE, EnumCategory.Drinks, EnumStatus.YELLOW, "I would like to have a drink out", Instant.parse("2020-11-20T10:56:04Z")),
                new Post("555", "Franzi","Drink out", Instant.parse("2020-11-22T20:00:00.00Z"), Instant.parse("2020-11-22T22:00:00.00Z"),EnumStatus.GREEN,Location.builder().district("Eimsbüttel").build() , EnumStatus.GREEN, EnumCategory.Drinks,EnumStatus.YELLOW, "I would like to have a drink out", Instant.parse("2020-11-20T10:56:04Z"))
        ));
    }

    public static final List<SendPostDto> getStockSendPostsDtoSortedForPrincipal(){
        return new ArrayList<SendPostDto>(List.of(
                new SendPostDto("111", "Franzi","Drink out", LocalDate.of(2020,11,20), LocalTime.of(10,00), LocalTime.of(11,00),EnumStatus.GREEN,Location.builder().district("Sternschanze").build() , EnumStatus.BLUE, EnumCategory.Drinks,EnumStatus.YELLOW, "I would like to have a drink out", Instant.parse("2020-11-20T10:56:04Z")),
                new SendPostDto("555", "Franzi","Drink out", LocalDate.of(2020,11,22),LocalTime.of(21,00), LocalTime.of(23,00),EnumStatus.GREEN,Location.builder().district("Eimsbüttel").build() , EnumStatus.GREEN, EnumCategory.Drinks,EnumStatus.YELLOW, "I would like to have a drink out", Instant.parse("2020-11-20T10:56:04Z"))
        ));
    }

    public static final List<Post> getStockFilteredPosts(){
        return new ArrayList<Post>(List.of(
                new Post("222", "Rebekka","Getting active", Instant.parse("2020-11-20T09:30:00.00Z"), Instant.parse("2020-11-20T12:30:00.00Z"),EnumStatus.YELLOW,Location.builder().district("Altona").build() , EnumStatus.YELLOW, EnumCategory.Exercise,EnumStatus.GREEN, "I would like to do some exercise", Instant.parse("2020-11-20T10:56:04Z"))
                ));
    }

    public static final List<SendPostDto> getStockFilteredSendPostsDto(){
        return new ArrayList<SendPostDto>(List.of(
                new SendPostDto("222", "Rebekka","Getting active", LocalDate.of(2020,11,20),LocalTime.of(10,30), LocalTime.of(13,30),EnumStatus.YELLOW,Location.builder().district("Altona").build() , EnumStatus.YELLOW, EnumCategory.Exercise,EnumStatus.GREEN, "I would like to do some exercise", Instant.parse("2020-11-20T10:56:04Z"))
                ));
    }



}