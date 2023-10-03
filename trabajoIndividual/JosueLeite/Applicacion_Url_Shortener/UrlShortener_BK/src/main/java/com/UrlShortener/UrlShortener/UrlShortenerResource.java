// package com.UrlShortener.UrlShortener;

// import java.nio.charset.StandardCharsets;

// import javax.management.RuntimeErrorException;

// import org.apache.commons.validator.routines.UrlValidator;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.data.redis.core.StringRedisTemplate;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.google.common.hash.Hashing;

// @RestController
// @RequestMapping("/rest/")
// public class UrlShortenerResource {

//     @Autowired
//     StringRedisTemplate redisTemplate;

//     @GetMapping("/{idUrl}")
//     public String getUrl(@PathVariable String idUrl) {
//         String url = redisTemplate.opsForValue().get(idUrl);
        
//         if (url == null){
//             throw new RuntimeException("URL no encontrada.");
//         }

//         System.out.println("Devolviendo Url " + url);
//         return url;
//     }

//     @PostMapping
//     public String validateUrl(@RequestBody String url){
//         UrlValidator urlValidator = new UrlValidator(
//             new String[]{"http", "https"}
//         );
//         if (urlValidator.isValid(url)) {

//             String idUrl = Hashing.murmur3_32().hashString(url, StandardCharsets.UTF_8).toString();

//             System.out.println("Generada encriptacion "+ idUrl + " para la URL " + url);
//             redisTemplate.opsForValue().set(idUrl, url);
//             return idUrl;
//         }

//         throw new RuntimeException("URL es invalida " + url);
//     }
// }