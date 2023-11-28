package com.UrlShortener.UrlShortener.repository;

import java.util.List;

import com.UrlShortener.UrlShortener.model.KeyValueEntity;

public interface UrlShortenerRepository {

    boolean saveUrl(KeyValueEntity newUrl);

    List<KeyValueEntity> fetchAllUrl();

    String fetchUrl(String idUrl);


}
