package de.neuefische.hh2020j1.spontaneity.service;

import de.neuefische.hh2020j1.spontaneity.dao.UserDao;
import de.neuefische.hh2020j1.spontaneity.model.SpontaneityUser;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SignUpService {

    private final UserDao userDao;

    public SignUpService(UserDao userDao) {
        this.userDao = userDao;
    }

    public void signUp(SpontaneityUser spontaneityUser) throws Exception {
        Optional<SpontaneityUser>user=userDao.findById(spontaneityUser.getUsername());
        if(user.isPresent()){
            throw new Exception("User is already signed up");
        }
        userDao.save(spontaneityUser);
    }
}
