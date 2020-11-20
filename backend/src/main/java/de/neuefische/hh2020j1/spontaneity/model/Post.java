package de.neuefische.hh2020j1.spontaneity.model;

import com.fasterxml.jackson.datatype.jsr310.deser.LocalTimeDeserializer;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "post")
public class Post {
    @Id
    private String id;
    private String creator;
    private Instant startPoint;
    private Instant endPoint;
    private String location;
    private String category;
    private String notes;
    private Instant timestamp;


}
