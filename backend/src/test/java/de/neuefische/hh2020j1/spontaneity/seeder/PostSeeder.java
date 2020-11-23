package de.neuefische.hh2020j1.spontaneity.seeder;

import de.neuefische.hh2020j1.spontaneity.dto.SendPostDto;
import de.neuefische.hh2020j1.spontaneity.model.Post;
import de.neuefische.hh2020j1.spontaneity.utils.EnumStatusLocation;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

public class PostSeeder {

    public static final List<Post> getStockPostsSorted(){
        return new ArrayList<>(List.of(
                new Post("111", "Franzi", Instant.parse("2020-11-20T09:00:00.00Z"), Instant.parse("2020-11-20T10:00:00.00Z"),"Sternschanze" , EnumStatusLocation.BLUE, "Drinks out", "I would like to have a drink out", Instant.parse("2020-11-20T10:56:04Z")),
                new Post("222", "Rebekka", Instant.parse("2020-11-20T11:00:00.00Z"), Instant.parse("2020-11-20T12:30:00.00Z"),"Altona" ,EnumStatusLocation.YELLOW , "Exercise", "I would like to do some exercise", Instant.parse("2020-11-20T10:56:04Z")),
                new Post("333", "Janosch", Instant.parse("2020-11-21T12:00:00.00Z"), Instant.parse("2020-11-21T13:00:00.00Z"),"Barmbek" ,EnumStatusLocation.GREEN, "Dinner out", "I would like to have a dinner out", Instant.parse("2020-11-20T10:56:04Z")),
                new Post("444", "Carsten", Instant.parse("2020-11-22T15:00:00.00Z"), Instant.parse("2020-11-22T17:00:00.00Z"),"Sternschanze" ,EnumStatusLocation.YELLOW, "Event", "I would like to go to a concert", Instant.parse("2020-11-20T10:56:04Z")),
                new Post("555", "Leonie", Instant.parse("2020-11-22T20:00:00.00Z"), Instant.parse("2020-11-22T22:00:00.00Z"),"Eimsbüttel" ,EnumStatusLocation.GREEN, "Drinks out", "I would like to have a drink out", Instant.parse("2020-11-20T10:56:04Z"))
        ));
    }

    public static final List<Post> getStockPostsUnsorted(){
        return new ArrayList<>(List.of(
                new Post("333", "Janosch", Instant.parse("2020-11-21T12:00:00.00Z"), Instant.parse("2020-11-21T13:00:00.00Z"),"Barmbek" ,EnumStatusLocation.GREEN, "Dinner out", "I would like to have a dinner out", Instant.parse("2020-11-20T10:56:04Z")),
                new Post("111", "Franzi", Instant.parse("2020-11-20T09:00:00.00Z"), Instant.parse("2020-11-20T10:00:00.00Z"),"Sternschanze" ,EnumStatusLocation.BLUE, "Drinks out", "I would like to have a drink out", Instant.parse("2020-11-20T10:56:04Z")),
                new Post("555", "Leonie", Instant.parse("2020-11-22T20:00:00.00Z"), Instant.parse("2020-11-22T22:00:00.00Z"),"Eimsbüttel" ,EnumStatusLocation.GREEN, "Drinks out", "I would like to have a drink out", Instant.parse("2020-11-20T10:56:04Z")),
                new Post("222", "Rebekka", Instant.parse("2020-11-20T11:00:00.00Z"), Instant.parse("2020-11-20T12:30:00.00Z"),"Altona" ,EnumStatusLocation.YELLOW, "Exercise", "I would like to do some exercise", Instant.parse("2020-11-20T10:56:04Z")),
                new Post("444", "Carsten", Instant.parse("2020-11-22T15:00:00.00Z"), Instant.parse("2020-11-22T17:00:00.00Z"),"Sternschanze" ,EnumStatusLocation.YELLOW, "Event", "I would like to go to a concert", Instant.parse("2020-11-20T10:56:04Z"))

        ));
    }

    public static final List<SendPostDto> getStockSendPostsDtoSorted(){
        return new ArrayList<SendPostDto>(List.of(
                new SendPostDto("111", "Franzi", LocalDate.of(2020,11,20), LocalTime.of(10,00), LocalTime.of(11,00),"Sternschanze" , EnumStatusLocation.BLUE, "Drinks out", "I would like to have a drink out", Instant.parse("2020-11-20T10:56:04Z")),
                new SendPostDto("222", "Rebekka", LocalDate.of(2020,11,20),LocalTime.of(12,00), LocalTime.of(13,30),"Altona" ,EnumStatusLocation.YELLOW , "Exercise", "I would like to do some exercise", Instant.parse("2020-11-20T10:56:04Z")),
                new SendPostDto("333", "Janosch", LocalDate.of(2020,11,21),LocalTime.of(13,00), LocalTime.of(14,00),"Barmbek" ,EnumStatusLocation.GREEN, "Dinner out", "I would like to have a dinner out", Instant.parse("2020-11-20T10:56:04Z")),
                new SendPostDto("444", "Carsten", LocalDate.of(2020,11,22),LocalTime.of(16,00), LocalTime.of(18,00),"Sternschanze" ,EnumStatusLocation.YELLOW, "Event", "I would like to go to a concert", Instant.parse("2020-11-20T10:56:04Z")),
                new SendPostDto("555", "Leonie", LocalDate.of(2020,11,22),LocalTime.of(21,00), LocalTime.of(23,00),"Eimsbüttel" ,EnumStatusLocation.GREEN, "Drinks out", "I would like to have a drink out", Instant.parse("2020-11-20T10:56:04Z"))
        ));
    }

}