package de.neuefische.hh2020j1.spontaneity.service;

import de.neuefische.hh2020j1.spontaneity.dao.UserDao;
import de.neuefische.hh2020j1.spontaneity.model.SpontaneityUser;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import java.util.Optional;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class SignUpServiceTest {

    final UserDao userDao = mock(UserDao.class);
    final SignUpService signUpService= new SignUpService(userDao);

    @Test
    @DisplayName("The \"signUp\" method with a new user should return new user")
    void signUpTest() {
        //Given
        when(userDao.findById("Fiene")).thenReturn(Optional.empty());
        SpontaneityUser fiene= SpontaneityUser.builder().username("Fiene").password("1234").build();

        // When
       Optional<String> user= signUpService.signUp(fiene);

       // Then
        assertThat(user.get(), is(fiene.getUsername()));
    }

    @Test
    @DisplayName("The \"signUp\" method with an already excisting user should return HttpStatus.FORBIDDEN")
    void signUpWithExistingUserDetailsTest() {
        //Given
        SpontaneityUser fiene = SpontaneityUser.builder().username("Fiene").password("1234").build();
        when(userDao.findById("Fiene")).thenReturn(Optional.of(fiene));

        // When
        Optional<String> user = signUpService.signUp(fiene);

        // Then
        assertThat(user, is(Optional.empty()));
    }

    @ParameterizedTest(name="when {0}, dann {1}")
    @DisplayName("The \"isLongEnough\" method should return true, when password has min 6 digits")
    @CsvSource({
            "123456, true",
            "123, false"
    })
    void isLongEnoughTest(String password, boolean expected) {

        // When
        boolean response = signUpService.isLongEnough(password);

        // Then
        assertEquals(expected, response);
    }

    @ParameterizedTest(name="when {0}, dann {1}")
    @DisplayName("The \"containsLowerCases\" method should return true, when password contains lower cases")
    @CsvSource({
            "123a456, true",
            "123, false",
            "12A3, false"
    })
    void containsLowerCasesTest(String password, boolean expected) {

        // When
        boolean response = signUpService.containsLowerCases(password);

        // Then
        assertEquals(expected, response);
    }

    @ParameterizedTest(name="when {0}, dann {1}")
    @DisplayName("The \"containsUpperCases\" method should return true, when password contains upper cases")
    @CsvSource({
            "123a456, false",
            "123, false",
            "12A3, true"
    })
    void containsUpperCasesTest(String password, boolean expected) {

        // When
        boolean response = signUpService.containsUpperCases(password);

        // Then
        assertEquals(expected, response);
    }

    @ParameterizedTest(name="when {0}, dann {1}")
    @DisplayName("The \"containsNumbers\" method should return true, when password contains numbers")
    @CsvSource({
            "123a456, true",
            "abc, false",
            "1Abc, true"
    })
    void containsNumbersTest(String password, boolean expected) {

        // When
        boolean response = signUpService.containsNumbers(password);

        // Then
        assertEquals(expected, response);
    }

    @ParameterizedTest(name="when {0}, dann {1}")
    @DisplayName("The \"validatePassword\" method should return true, when password contains numbers")
    @CsvSource({
            "12A3a456, true",
            "abc, false",
            "1Abc, false"
    })
    void validatePasswordTest(String password, boolean expected) {

        // When
        boolean response = signUpService.validatePassword(password);

        // Then
        assertEquals(expected, response);
    }


}
