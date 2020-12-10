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
                new FriendDto("rebekka123", "Rebekka", "Nachname"),
                new FriendDto("leonie123","Leonie","Nachname")
        ));
    }

    public static List<FriendDto> getReducedStockFriends(){
        return new ArrayList<>(List.of(
                new FriendDto("janosch123","Janosch","Nachname"),
                new FriendDto("rebekka123", "Rebekka", "Nachname")
        ));
    }

    public static List<FriendDto> getStockFriendsWithAdded(){
        return new ArrayList<>(List.of(
                new FriendDto("janosch123","Janosch","Nachname"),
                new FriendDto("eva123", "Eva","Nachname"),
                new FriendDto("rebekka123", "Rebekka", "Nachname"),
                new FriendDto("carsten123", "Carsten", "Nachname"),
                new FriendDto("leonie123","Leonie","Nachname")
        ));
    }

    public static List <SpontaneityUser> getStockSpontaneityUser(){
        String password=new BCryptPasswordEncoder().encode("a-password");
        return new ArrayList<>(List.of(
                new SpontaneityUser("leonie123", "leonie@email.de", "Leonie", "Nachname", password, List.of()),
                new SpontaneityUser("rebekka123", "rebekka@email.de", "Rebekka", "Nachname", password, List.of()),
                new SpontaneityUser("janosch123", "janosch@email.de", "Janosch", "Nachname", password, List.of()),
                new SpontaneityUser("eva123", "eva@email.de", "Eva", "Nachname", password, List.of())));
    }

    public static SpontaneityUser getFirstStockSpontaneityUser(){
        String password=new BCryptPasswordEncoder().encode("a-password");
        return new SpontaneityUser("carsten123", "carsten@email.de", "Carsten", "Nachname", password, getStockFriends());
    }

    public static SpontaneityUser getSecondStockSpontaneityUser(){
        String password=new BCryptPasswordEncoder().encode("a-password");
        return new SpontaneityUser("franzi123", "franzi@email.de", "Franzi", "Nachname", password, getStockFriends());
    }

    public static SpontaneityUser getThirdStockSpontaneityUser(){
        String password=new BCryptPasswordEncoder().encode("a-password");
        return new SpontaneityUser("leonie123", "leonie@email.de", "Leonie", "Nachname", password, List.of());
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
