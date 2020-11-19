package de.neuefische.hh2020j1.spontaneity.service;

import de.neuefische.hh2020j1.spontaneity.dao.UserDao;
import de.neuefische.hh2020j1.spontaneity.model.SpontaneityUser;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpStatusCodeException;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class SignUpService {

    private final UserDao userDao;

    public SignUpService(UserDao userDao) {
        this.userDao = userDao;
    }

    public Optional <String> signUp(SpontaneityUser spontaneityUser){
        Optional<SpontaneityUser>user=userDao.findById(spontaneityUser.getUsername());
        if(user.isPresent()){
            return Optional.empty();
        }
        String hashPassword= new BCryptPasswordEncoder().encode(spontaneityUser.getPassword());
        SpontaneityUser spontaneityUserWithHashPW= new SpontaneityUser(spontaneityUser.getUsername(), hashPassword);
        userDao.save(spontaneityUserWithHashPW);
        return Optional.of(spontaneityUser.getUsername());
    }

    public boolean validatePassword(String password) {
        return isLongEnough(password)&& containsNumbers(password) && containsUpperCases(password) && containsLowerCases(password);
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
        return password.length()>=6;
    }
}
