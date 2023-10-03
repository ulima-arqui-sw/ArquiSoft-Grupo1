package com.UrlShortener.UrlShortener.service;

import java.util.List;

import com.UrlShortener.UrlShortener.model.KeyValueEntity;

public interface UrlShortenerService {

    boolean saveUrl(KeyValueEntity newUrl);

    List<KeyValueEntity> fetchAllUrl();

    String fetchUrl(String idUrl);

}
