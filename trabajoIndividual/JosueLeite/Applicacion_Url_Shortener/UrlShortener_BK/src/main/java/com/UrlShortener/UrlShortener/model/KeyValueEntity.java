package com.UrlShortener.UrlShortener.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

import lombok.Data;

@RedisHash("keyvalue")
@Data
public class KeyValueEntity {
    
    @Id
    public String key;
    public String value;
}
