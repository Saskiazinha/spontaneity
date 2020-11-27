package de.neuefische.hh2020j1.spontaneity.dto;

import de.neuefische.hh2020j1.spontaneity.utils.EnumCategory;
import de.neuefische.hh2020j1.spontaneity.utils.EnumStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UpdatePostDto {
    private String id;
    private LocalDate localDate;
    private LocalTime startPoint;
    private LocalTime endPoint;
    private EnumStatus statusTime;
    private String location;
    private EnumStatus statusLocation;
    private EnumCategory category;
    private EnumStatus statusCategory;
    private String notes;
}
