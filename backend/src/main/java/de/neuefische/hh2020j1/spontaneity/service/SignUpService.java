package de.neuefische.hh2020j1.spontaneity.service;


import de.neuefische.hh2020j1.spontaneity.dao.UserDao;
import de.neuefische.hh2020j1.spontaneity.model.SpontaneityUser;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class SignUpService {

    private final UserDao userDao;

    public SignUpService(UserDao userDao) {
        this.userDao = userDao;
    }

    public Optional<String> signUp(SpontaneityUser spontaneityUser) {
        Optional<SpontaneityUser> user = userDao.findById(spontaneityUser.getUsername());
        if (user.isPresent()) {
            return Optional.empty();
        }
        String hashPassword = new BCryptPasswordEncoder().encode(spontaneityUser.getPassword());
        SpontaneityUser spontaneityUserWithHashPW = SpontaneityUser.builder()
                .username(spontaneityUser.getUsername())
                .email(spontaneityUser.getEmail())
                .firstName(spontaneityUser.getFirstName())
                .lastName(spontaneityUser.getLastName())
                .password(hashPassword)
                .friends(new ArrayList<>(List.of()))
                .build();

        userDao.save(spontaneityUserWithHashPW);
        return Optional.of(spontaneityUser.getUsername());
    }

    public boolean validatePassword(String password) {
        return isLongEnough(password) && containsNumbers(password) && containsUpperCases(password) && containsLowerCases(password);
    }

    public boolean containsLowerCases(String password) {
        return password.matches(".*[a-z].*");
    }

    public boolean containsUpperCases(String password) {
        return password.matches(".*[A-Z].*");
    }

    public boolean containsNumbers(String password) {
        return password.matches(".*[0-9].*");
    }

    public boolean isLongEnough(String password) {
        return password.length() >= 6;
    }
}
