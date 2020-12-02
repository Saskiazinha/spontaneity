package de.neuefische.hh2020j1.spontaneity.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Location {
    private String lat;
    private String lng;
    private String district;
}
