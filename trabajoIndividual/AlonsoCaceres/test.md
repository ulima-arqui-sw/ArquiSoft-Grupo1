# Trabajo Individual

## Tema: Code Smells

Alonso Cáceres Gonzales

## Herramientas a usar

Este estudio se llevo a cabo en la distribucion Gentoo linux y con herramientas de software Libre.

<em>If it moves, compile it.<em> - [Gentoo](https://www.gentoo.org/)

### Drogon

Se trata de un framework de C++ para desarrollo web que segun benchmarks su rama "core" es el framework que mejor rendimiento logra.

![Drogon](https://github.com/DarkShadow76/ArquiSoft-Grupo1/blob/master/trabajoIndividual/AlonsoCaceres/benchmark.png)

La documentancion para la instalacion y configuracion de Drogon Framework esta disponible en su respositorio de GitHub.

#### Requisitos de Instalacion:

- Version de Linux Kernel mayor a 2.6.9: [Archivos del Kernel Linux](https://www.kernel.org/)
- Coleccion de Compilador de GNU: [Instalar GCC](https://gcc.gnu.org/)
- Cross-Platform Make: [Instalar Cmake](https://github.com/drogonframework/drogon/wiki/ENG-02-Installation)
- Git: [Optener Git](https://git-scm.com/)

#### Librerias Obligatorias
 
- jsoncpp
- libuuid
- zlib

[Instalacion de Drogon Framework](https://github.com/drogonframework/drogon/wiki/ENG-02-Installation)

### CppCheck

El repositorio de Gentoo linux nos proporsiona la ultima version de esta utilidad

```shell
sudo emerge dev-util/cppcheck
```

- [Download CppCheck](https://cppcheck.sourceforge.io/)