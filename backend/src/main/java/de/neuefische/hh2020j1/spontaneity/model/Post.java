package de.neuefische.hh2020j1.spontaneity.model;

import de.neuefische.hh2020j1.spontaneity.utils.EnumStatusLocation;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(collection = "post")
public class Post {
    @Id
    private String id;
    private String creator;
    private Instant startPoint;
    private Instant endPoint;
    private String location;
    private EnumStatusLocation statusLocation;
    private String category;
    private String notes;
    private Instant timestamp;


}
