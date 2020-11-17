package de.neuefische.hh2020j1.spontaneity.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.Duration;
import java.time.Instant;
import java.util.Map;

@Service
public class JwtUtils {
    @Value("${jwt.secretkey}")
    private String secretKey;

    public String generateJwtToken(String username, Map<String, Object> claims){
        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(Date.from(Instant.now()))
                .setExpiration(Date.from(Instant.now().plus(Duration.ofMinutes(60))))
                .setSubject(username)
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
    }
}
