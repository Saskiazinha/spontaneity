package de.neuefische.hh2020j1.spontaneity.utils;

import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
public class IdUtils {
    public String generateId() {
        return UUID.randomUUID().toString();
    }
}
