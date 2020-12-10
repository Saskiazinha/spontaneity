package de.neuefische.hh2020j1.spontaneity.utils;

import de.neuefische.hh2020j1.spontaneity.dto.SendPostDto;
import de.neuefische.hh2020j1.spontaneity.model.Post;
import de.neuefische.hh2020j1.spontaneity.seeder.PostSeeder;
import org.junit.jupiter.api.Test;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import java.util.List;


class ParseUtilsTest {

    @Test
    void parseToSendPostDtoTest() {
        //When
        List<SendPostDto> sendPosts= ParseUtils.parseToSendPostDtos(PostSeeder.getStockPostsSorted());
        //Then
        assertThat(sendPosts,is(PostSeeder.getStockSendPostsDtoSorted()));
    }

}