package com.UrlShortener.UrlShortener.repository;

import java.util.List;

import javax.sound.midi.Soundbank;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;

import com.UrlShortener.UrlShortener.model.KeyValueEntity;

@Repository
public class UrlShortenerRepositoryImpl implements UrlShortenerRepository{

    @Autowired
    private RedisTemplate redisTemplate;

    private static final String KEY = "URL";

    @Override
    public boolean saveUrl(KeyValueEntity newUrl) {
        try {
            System.out.println("Generada llave "+ newUrl.getKey() + " para la URL " + newUrl.getValue());
            // redisTemplate.opsForValue().set(newUrl.getKey(), newUrl.getValue());
            redisTemplate.opsForHash().put(KEY, newUrl.getKey(), newUrl.getValue());
            return true;
            
        } catch (Exception e) {
            System.out.println("Error en el envio de datos.");
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public List<KeyValueEntity> fetchAllUrl() {
        List<KeyValueEntity> urls;

        urls = redisTemplate.opsForHash().values(KEY);

        System.out.println("Mapa de llaves:");
        System.out.println(redisTemplate.opsForHash().entries(KEY));
        
        return urls;
    }

    @Override
    public String fetchUrl(String idUrl) {
        String url = (String) redisTemplate.opsForHash().get(KEY, idUrl);
        return url;
    }
    
}
