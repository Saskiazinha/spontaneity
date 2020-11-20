package de.neuefische.hh2020j1.spontaneity.seeder;

import de.neuefische.hh2020j1.spontaneity.model.Post;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

public class PostSeeder {

    public static final List<Post> getStockPosts(){
        return new ArrayList<>(List.of(
                new Post("111", "Franzi", Instant.parse("2020-11-20T15:00:00.00Z"), Instant.parse("2020-11-20T17:00:00.00Z"),"Sternschanze" , "Drinks out", "I would like to have a drink out", Instant.parse("2020-11-20T10:56:04Z")),
                new Post("222", "Rebekka", Instant.parse("2020-11-20T15:00:00.00Z"), Instant.parse("2020-11-20T17:00:00.00Z"),"Altona" , "Exercise", "I would like to do some exercise", Instant.parse("2020-11-20T10:56:04Z")),
                new Post("333", "Janosch", Instant.parse("2020-11-21T15:00:00.00Z"), Instant.parse("2020-11-21T17:00:00.00Z"),"Barmbek" , "Dinner out", "I would like to have a dinner out", Instant.parse("2020-11-20T10:56:04Z")),
                new Post("444", "Carsten", Instant.parse("2020-11-22T15:00:00.00Z"), Instant.parse("2020-11-22T17:00:00.00Z"),"Sternschanze" , "Event", "I would like to go to a concert", Instant.parse("2020-11-20T10:56:04Z")),
                new Post("555", "Leonie", Instant.parse("2020-11-22T15:00:00.00Z"), Instant.parse("2020-11-22T17:00:00.00Z"),"Eimsbüttel" , "Drinks out", "I would like to have a drink out", Instant.parse("2020-11-20T10:56:04Z"))
        ));
    }
}