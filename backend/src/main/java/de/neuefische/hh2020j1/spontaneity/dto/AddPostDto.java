package de.neuefische.hh2020j1.spontaneity.dto;

import de.neuefische.hh2020j1.spontaneity.model.EnumCategory;
import de.neuefische.hh2020j1.spontaneity.model.EnumStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AddPostDto {

    private String title;
    private LocalDate localDate;
    private LocalTime startPoint;
    private LocalTime endPoint;
    private EnumStatus statusTime;
    private String address;
    private String district;
    private double lat;
    private double lng;
    private EnumStatus statusLocation;
    private EnumCategory category;
    private EnumStatus statusCategory;
    private String notes;


}
