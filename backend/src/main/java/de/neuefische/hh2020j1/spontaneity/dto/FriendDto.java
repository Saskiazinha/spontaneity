package de.neuefische.hh2020j1.spontaneity.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FriendDto {
    private String username;
    private String firstName;
    private String lastName;
}
