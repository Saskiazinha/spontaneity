package de.neuefische.hh2020j1.spontaneity.service;

import de.neuefische.hh2020j1.spontaneity.dao.UserDao;
import de.neuefische.hh2020j1.spontaneity.model.SpontaneityUser;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpStatusCodeException;

import java.util.Optional;

@Service
public class SignUpService {

    private final UserDao userDao;

    public SignUpService(UserDao userDao) {
        this.userDao = userDao;
    }

    public void signUp(SpontaneityUser spontaneityUser){
        Optional<SpontaneityUser>user=userDao.findById(spontaneityUser.getUsername());
        if(user.isPresent()){
            throw new HttpStatusCodeException(HttpStatus.FORBIDDEN) {
            };
        }
        String hashPassword= new BCryptPasswordEncoder().encode(spontaneityUser.getPassword());
        SpontaneityUser spontaneityUserWithHashPW= new SpontaneityUser(spontaneityUser.getUsername(), hashPassword);
        userDao.save(spontaneityUserWithHashPW);
    }
}
