package com.UrlShortener.UrlShortener.repository;

import org.springframework.stereotype.Repository;

import com.UrlShortener.UrlShortener.model.KeyValueEntity;

@Repository
public interface UrlShortenerRepository {

    boolean saveUrl(KeyValueEntity newUrl);

}
