package de.neuefische.hh2020j1.spontaneity.seeder;

import de.neuefische.hh2020j1.spontaneity.dto.FriendDto;
import de.neuefische.hh2020j1.spontaneity.model.SpontaneityUser;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.ArrayList;
import java.util.List;

public class FriendSeeder {

    public static List<FriendDto> getStockFriends(){
        return new ArrayList<>(List.of(
                new FriendDto("janosch123","Janosch","Nachname"),
                new FriendDto("eva123", "Eva","Nachname"),
                new FriendDto("rebekka123", "Rebekka", "Nachname")
        ));
    }

    public static List<FriendDto> getStockFriendsWithAdded(){
        return new ArrayList<>(List.of(
                new FriendDto("janosch123","Janosch","Nachname"),
                new FriendDto("eva123", "Eva","Nachname"),
                new FriendDto("rebekka123", "Rebekka", "Nachname"),
                new FriendDto("carsten123", "Carsten", "Nachname")
        ));
    }

    public static SpontaneityUser getStockSpontaneityUser(){
        String password=new BCryptPasswordEncoder().encode("a-password");
        return new SpontaneityUser("carsten123", "carsten@email.de", "Carsten", "Nachname", password, getStockFriends());
    }

    public static SpontaneityUser getSecondStockSpontaneityUser(){
        String password=new BCryptPasswordEncoder().encode("a-password");
        return new SpontaneityUser("franzi123", "franzi@email.de", "Franzi", "Nachname", password, getStockFriends());
    }

    public static FriendDto getStockFriendDto(){
        return new FriendDto("carsten123", "Carsten", "Nachname");
    }

    public static FriendDto getSecondStockFriendDto(){
        return new FriendDto("franzi123", "Franzi", "Nachname");
    }

    public static FriendDto getThirdStockFriendDto(){
        return new FriendDto("rebekka123", "Rebekka", "Nachname");
    }
}
