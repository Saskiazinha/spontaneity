package de.neuefische.hh2020j1.spontaneity.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection="user")
public class SpontaneityUser {

    @Id
    private String username;
    private String password;
}
