package de.neuefische.hh2020j1.spontaneity.model;

import de.neuefische.hh2020j1.spontaneity.utils.EnumCategory;
import de.neuefische.hh2020j1.spontaneity.utils.EnumStatus;
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
    private String title;
    private Instant startPoint;
    private Instant endPoint;
    private EnumStatus statusTime;
    private String location;
    private EnumStatus statusLocation;
    private EnumCategory category;
    private EnumStatus statusCategory;
    private String notes;
    private Instant timestamp;


}
