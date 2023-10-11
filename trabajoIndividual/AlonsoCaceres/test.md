# Trabajo Individual

## Tema: Code Smells

Alonso Cáceres Gonzales

## 1. Herramientas Necesarias

Este estudio se llevo a cabo en la distribucion Gentoo linux y con herramientas de software Libre.

<em>If it moves, compile it.</em> - [Gentoo](https://www.gentoo.org/)

### - Drogon

Se trata de un framework de C++ para desarrollo web que segun benchmarks su rama "core" es el framework que mejor rendimiento alcanza. 


![Drogon](https://github.com/DarkShadow76/ArquiSoft-Grupo1/blob/master/trabajoIndividual/AlonsoCaceres/benchmark.png)

Algunas características clave de Drogon incluyen:

  1. Rendimiento: Drogon está diseñado para ser rápido y eficiente. Utiliza la programación asíncrona para manejar múltiples solicitudes simultáneamente y aprovechar al máximo los recursos del sistema.

  2. Compatibilidad con HTTP/1.1 y HTTP/2: Admite tanto HTTP/1.1 como HTTP/2, lo que permite el uso de conexiones multiplexadas y otras características de HTTP/2 para acelerar la carga de páginas web.

  3. Enrutamiento y controladores: Drogon facilita la creación de rutas y controladores para manejar solicitudes HTTP y definir cómo se deben procesar.

  4. Plantillas: Proporciona un sistema de plantillas que permite generar contenido HTML de manera eficiente y estructurada.

  5. Bases de datos: Ofrece soporte para bases de datos, incluidas PostgreSQL, MySQL y SQLite, para ayudar a interactuar con bases de datos en aplicaciones web.

  6. Sistemas operativos múltiples: Drogon es compatible con varios sistemas operativos, incluidos Linux, macOS y Windows.

  7. Seguridad: Incluye características de seguridad, como protección contra inyecciones SQL y protección contra ataques comunes en aplicaciones web.

  8. API RESTful: Facilita la creación de servicios web RESTful para construir aplicaciones que sigan principios de arquitectura orientada a servicios.

  9. Código abierto: Drogon es de código abierto y se distribuye bajo una licencia que permite su uso, modificación y distribución libre.

#### Requisitos de Instalacion:

- Version de Linux Kernel mayor a 2.6.9: [Archivos del Kernel Linux](https://www.kernel.org/)
- Coleccion de Compilador de GNU: [Instalar GCC](https://gcc.gnu.org/)
- Cross-Platform Make: [Instalar Cmake](https://github.com/drogonframework/drogon/wiki/ENG-02-Installation)
- Git: [Obtener Git](https://git-scm.com/)

#### Librerias Obligatorias
 
- jsoncpp

  Es una biblioteca de C++ que se utiliza para trabajar con datos en formato JSON (JavaScript Object Notation). Permite analizar datos JSON, crear estructuras de datos JSON y serializar datos en formato JSON.

- libuuid

  Es útil cuando se necesite generar o trabajar con identificadores únicos en aplicaciones. Esto puede ser importante en aplicaciones distribuidas o cuando se requiera evitar conflictos de identificación.

- zlib

  Se utiliza en una amplia variedad de aplicaciones para la compresión de datos. Por ejemplo, es comúnmente utilizado en aplicaciones web para comprimir contenido antes de enviarlo al navegador del cliente, en aplicaciones de compresión de archivos, y en aplicaciones que necesitan ahorrar espacio de almacenamiento o transferir datos de manera eficiente.

La documentancion para la instalacion y configuracion de Drogon Framework esta disponible en su respositorio de GitHub.

[Instalacion de Drogon Framework para Windows](https://github.com/drogonframework/drogon/wiki/ENG-02-Installation#windows)

### - CppCheck

CppCheck es una programa para el analisis estatico de codigo para C/C++. Ofrece analisis unico de codigo para detectar bugs, comportamientos undefinidos y contruccions inseguras de codigo.

[Download CppCheck](https://cppcheck.sourceforge.io/)

## 2. Pruebas

Para realizar las pruebas se siguo los siguientes pasos:

1. Clonar el branch <em>"master"</em> del proyecto Drogon Framework a una carpeta local.

```
git clone https://github.com/drogonframework/drogon.git
```


2. 

## 3. Resultados
