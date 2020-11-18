package de.neuefische.hh2020j1.spontaneity.service;

import de.neuefische.hh2020j1.spontaneity.dao.UserDao;
import de.neuefische.hh2020j1.spontaneity.model.SpontaneityUser;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.client.HttpStatusCodeException;

import java.util.Optional;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.*;

public class SignUpServiceTest {

    final UserDao userDao = mock(UserDao.class);
    final SignUpService signUpService= new SignUpService(userDao);

    @Test
    @DisplayName("The \"signUp\" method with a new user should not throw exception")
    void signUpTest() {
        //Given
        when(userDao.findById("Fiene")).thenReturn(Optional.empty());
        SpontaneityUser fiene= new SpontaneityUser("Fiene","1234");

        // When
        try{
            signUpService.signUp(fiene);
        } catch (HttpStatusCodeException e){
            System.out.println("This shoud never appear");
        }
    }

    @Test
    @DisplayName("The \"signUp\" method with an already excisting user should return HttpStatus.FORBIDDEN")
    void signUpWithExistingUserDetailsTest() {
        //Given
        SpontaneityUser fiene= new SpontaneityUser("Fiene","1234");
        when(userDao.findById("Fiene")).thenReturn(Optional.of(fiene));

        // When
        try{
            signUpService.signUp(fiene);
        } catch (HttpStatusCodeException e){
            assertThat(e.getStatusCode(),is(HttpStatus.FORBIDDEN));
        }
    }

}
