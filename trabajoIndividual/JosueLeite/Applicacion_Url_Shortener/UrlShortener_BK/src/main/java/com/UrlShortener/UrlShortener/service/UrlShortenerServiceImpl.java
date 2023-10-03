package com.UrlShortener.UrlShortener.service;

import java.util.List;

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

    @Override
    public List<KeyValueEntity> fetchAllUrl() {
        return urlShortenerRepository.fetchAllUrl();
    }

    @Override
    public String fetchUrl(String idUrl) {
        return urlShortenerRepository.fetchUrl(idUrl);
    }
    
}
