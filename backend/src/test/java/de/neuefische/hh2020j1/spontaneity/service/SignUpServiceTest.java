package de.neuefische.hh2020j1.spontaneity.service;

import de.neuefische.hh2020j1.spontaneity.dao.UserDao;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.Optional;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.mockito.Mockito.*;

public class SignUpServiceTest {

    final UserDao userDao = mock(UserDao.class);

    @Test
    @DisplayName("The \"signUp\" method should save a new user to the UserDao and return HttpStatus.OK")
    void signUpTest() {
        //Given


        // When


        // Then
    }

}
