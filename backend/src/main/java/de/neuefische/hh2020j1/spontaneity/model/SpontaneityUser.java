package de.neuefische.hh2020j1.spontaneity.model;

import de.neuefische.hh2020j1.spontaneity.dto.FriendDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "user")
public class SpontaneityUser {

    @Id
    private String username;
    private String email;
    private String firstName;
    private String lastName;
    private String password;
    private List<FriendDto> friends;
}
