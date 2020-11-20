package de.neuefische.hh2020j1.spontaneity.dao;

import de.neuefische.hh2020j1.spontaneity.model.Post;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface PostDao extends PagingAndSortingRepository<Post,String> {
    List<Post> findAll();
}
