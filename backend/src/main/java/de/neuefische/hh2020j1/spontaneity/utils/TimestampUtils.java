package de.neuefische.hh2020j1.spontaneity.utils;

import org.springframework.stereotype.Component;

import java.time.Instant;

@Component
public class TimestampUtils {
    public Instant generateTimestampInstant() {
        return Instant.ofEpochSecond(Instant.now().getEpochSecond());
    }
}
