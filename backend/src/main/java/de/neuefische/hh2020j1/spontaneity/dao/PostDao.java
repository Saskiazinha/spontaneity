package de.neuefische.hh2020j1.spontaneity.dao;

import de.neuefische.hh2020j1.spontaneity.model.Post;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.time.LocalTime;
import java.util.List;

public interface PostDao extends PagingAndSortingRepository<Post,String> {

}
