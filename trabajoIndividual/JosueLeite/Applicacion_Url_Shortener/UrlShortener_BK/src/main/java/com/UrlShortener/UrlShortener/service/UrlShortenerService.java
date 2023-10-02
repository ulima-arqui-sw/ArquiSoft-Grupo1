package com.UrlShortener.UrlShortener.service;

import com.UrlShortener.UrlShortener.model.KeyValueEntity;

public interface UrlShortenerService {

    boolean saveUrl(KeyValueEntity newUrl);
    
}
