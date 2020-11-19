package de.neuefische.hh2020j1.spontaneity.model;

import com.fasterxml.jackson.datatype.jsr310.deser.LocalTimeDeserializer;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;
import java.time.LocalTime;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "post")
public class Post {
    @Id
    private String id;
    private String creator;
    private Date date;
    private LocalTime startPoint;
    private LocalTime endPoint;
    private String location;
    private String category;
    private String notes;
    private Instant timestamp;


}
