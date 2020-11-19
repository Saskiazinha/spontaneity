package de.neuefische.hh2020j1.spontaneity.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalTime;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PostDto {

    private Date date;
    private LocalTime startPoint;
    private LocalTime endPoint;
    private String location;
    private String category;
    private String notes;


}
