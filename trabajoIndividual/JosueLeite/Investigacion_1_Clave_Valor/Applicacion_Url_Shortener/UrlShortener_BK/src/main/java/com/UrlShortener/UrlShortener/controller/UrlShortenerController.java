package com.UrlShortener.UrlShortener.controller;

import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.List;

import org.apache.commons.validator.routines.UrlValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.UrlShortener.UrlShortener.model.KeyValueEntity;
import com.UrlShortener.UrlShortener.service.UrlShortenerService;
import com.google.common.hash.Hashing;

@RestController
@CrossOrigin(origins = "http://localhost:4200", methods = {RequestMethod.GET, RequestMethod.POST})
public class UrlShortenerController {
    
    @Autowired
    private UrlShortenerService urlShortenerService;

    @PostMapping
    public ResponseEntity<String> validateUrl(@RequestBody String url){
        UrlValidator urlValidator = new UrlValidator(
            new String[]{"http", "https"}
        );
        if (urlValidator.isValid(url)) {

            String idUrl = Hashing.murmur3_32().hashString(url, StandardCharsets.UTF_8).toString();

            KeyValueEntity newUrl = new KeyValueEntity();
            newUrl.setKey(idUrl);
            newUrl.setValue(url);

            boolean result = urlShortenerService.saveUrl(newUrl);
            
            if (result) return ResponseEntity.ok(idUrl);
            else return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        throw new RuntimeException("URL es invalida " + url);
    }

    @GetMapping("/all")
    public ResponseEntity<List<KeyValueEntity>> fetchAllUrl() {
        List<KeyValueEntity> urls;
        urls = urlShortenerService.fetchAllUrl();
        
        return ResponseEntity.ok(urls);
    }

    @GetMapping("/{idUrl}")
    public String getUrl(@PathVariable String idUrl) {
        String url = urlShortenerService.fetchUrl(idUrl);
        
        if (url == null){
            throw new RuntimeException("URL no encontrada.");
        }

        System.out.println("Devolviendo Url " + url);
        return url;
    }

}
