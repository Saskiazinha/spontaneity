package de.neuefische.hh2020j1.spontaneity.service;

import de.neuefische.hh2020j1.spontaneity.dao.UserDao;
import de.neuefische.hh2020j1.spontaneity.model.SpontaneityUser;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SignUpService {

    private final UserDao userDao;

    public SignUpService(UserDao userDao) {
        this.userDao = userDao;
    }

    public ResponseEntity signUp(SpontaneityUser spontaneityUser){
        Optional<SpontaneityUser>user=userDao.findById(spontaneityUser.getUsername());
        if(user.isPresent()){
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }
        userDao.save(spontaneityUser);
        return new ResponseEntity(HttpStatus.OK);
    }
}
