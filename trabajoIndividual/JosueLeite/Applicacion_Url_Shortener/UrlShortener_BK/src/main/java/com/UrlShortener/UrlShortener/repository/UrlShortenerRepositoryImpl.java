package com.UrlShortener.UrlShortener.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;

import com.UrlShortener.UrlShortener.model.KeyValueEntity;

public class UrlShortenerRepositoryImpl implements UrlShortenerRepository{

    @Autowired
    private RedisTemplate redisTemplate;

    @Override
    public boolean saveUrl(KeyValueEntity newUrl) {
        try {
            System.out.println("Generada llave "+ newUrl.getKey() + " para la URL " + newUrl.getValue());
            redisTemplate.opsForValue().set(newUrl.getKey(), newUrl.getValue());
            return true;
            
        } catch (Exception e) {
            System.out.println("Error en el envio de datos.");
            e.printStackTrace();
            return false;
        }
        
    }
    
}
