package de.neuefische.hh2020j1.spontaneity.dto;

import de.neuefische.hh2020j1.spontaneity.utils.EnumStatusLocation;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SendPostDto {

    private String id;
    private String creator;
    private LocalDate localDate;
    private LocalTime startPoint;
    private LocalTime endPoint;
    private String location;
    private EnumStatusLocation statusLocation;
    private String category;
    private String notes;
    private Instant timestamp;
}

