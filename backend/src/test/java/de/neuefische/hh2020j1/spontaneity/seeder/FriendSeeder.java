package de.neuefische.hh2020j1.spontaneity.seeder;

import de.neuefische.hh2020j1.spontaneity.dto.FriendDto;
import de.neuefische.hh2020j1.spontaneity.model.SpontaneityUser;

import java.util.ArrayList;
import java.util.List;

public class FriendSeeder {

    public static final List<FriendDto> getStockFriends(){
        return new ArrayList<>(List.of(
                new FriendDto("janosch123","Janosch","Nachname"),
                new FriendDto("eva123", "Eva","Nachname"),
                new FriendDto("rebekka123", "Rebekka", "Nachname")
        ));
    }

    public static final List<FriendDto> getStockFriendsWithAdded(){
        return new ArrayList<>(List.of(
                new FriendDto("janosch123","Janosch","Nachname"),
                new FriendDto("eva123", "Eva","Nachname"),
                new FriendDto("rebekka123", "Rebekka", "Nachname"),
                new FriendDto("carsten123", "Carsten", "Nachname")
        ));
    }

    public static final SpontaneityUser getStockSpontaneityUser(){
        return new SpontaneityUser("carsten123", "carsten@email.de", "Carsten", "Nachname", "password",getStockFriends());
    }

    public static final FriendDto getStockFriendDto(){
        return new FriendDto("carsten123", "Carsten", "Nachname");
    }
}
