package com.UrlShortener.UrlShortener.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.UrlShortener.UrlShortener.model.KeyValueEntity;
import com.UrlShortener.UrlShortener.repository.UrlShortenerRepository;

@Service
public class UrlShortenerServiceImpl implements UrlShortenerService {

    @Autowired
    private UrlShortenerRepository urlShortenerRepository;

    @Override
    public boolean saveUrl(KeyValueEntity newUrl) {
    
        return urlShortenerRepository.saveUrl(newUrl);
    }
    
}
