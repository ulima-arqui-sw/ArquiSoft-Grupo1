# Análisis de código estático
## Definición
El análisis de código estático, también conocido como análisis de código fuente, es una técnica fundamental para el desarrollo seguro de software donde se utilizan herramientas automatizadas que examinan el código sin ejecutarlo directamente.   

Si bien idealmente se espera que estas herramientas identifiquen automáticamente vulnerabilidades de seguridad con un alto nivel de certeza, en la práctica, a menudo funcionan como asistentes para los analistas. Ayudan a centrarse en las partes críticas del código y a detectar errores de manera más eficiente que las herramientas automáticas por sí solas. Algunas de estas herramientas se integran en los entornos de desarrollo integrados (IDE) y proporcionan retroalimentación instantánea a los desarrolladores durante la fase de desarrollo de software, lo que es crucial para el ciclo de vida del desarrollo y permite abordar problemas de seguridad de manera temprana [1].   

El análisis de código estático tiene como objetivo detectar errores que pueden provocar la terminación prematura o resultados indefinidos del programa. Estos errores incluyen situaciones como: [2]
-	Acceder a elementos de una matriz fuera de sus límites
-	Referenciar un puntero nulo, no liberar memoria correctamente (memory leaks)
-	Desbordamientos o subdesbordamientos de búfer
-	Uso de variables o punteros no inicializados
-	Operaciones aritméticas inválidas
-	Bucles no terminantes
-	Llamadas que nunca retornan

Aunque la mayoría de estos errores pueden detectarse mediante pruebas de software, el análisis de código estático ofrece una perspectiva prometedora para ayudar a los desarrolladores a producir software correcto y confiable. Sin embargo, las pruebas siguen siendo una actividad importante en el proceso de desarrollo de software [2].  

## Ventajas y desventajas
Ventajas:
-	Puede ser aplicada sin ejecutar el código: 
-	Puede ser aplicada en una etapa temprana del desarrollo
-	Los resultados no dependen de los datos de entrada
-	Los resultados pueden generalizarse para futuras ejecuciones
-	Es menos costoso y más rápido

Desventajas:
-	Muchos falsos positivos
-	Se usan aproximaciones
-	No pueden ser usados para corrección funcional del programa

## Técnicas
Análisis de sintaxis: Esta técnica se centra en verificar si el código fuente sigue las reglas de la sintaxis del lenguaje de programación que se está usando. Busca errores que ocurren por una mala estructuración del código, como paréntesis o llaves mal cerradas, declaraciones incorrectas de variables o uso inadecuado de palabras clave.  

Análisis de data y flujo de control: Esta técnica se enfoca en el análisis del flujo de datos a través del programa y cómo se controla el flujo de ejecución. Busca problemas como el acceso a variables sin inicializar, condiciones redundantes, bucles infinitos, entre otros.  

Análisis de seguridad: Esta técnica identifica posibles vulnerabilidades y debilidades de seguridad en el código fuente frente a problemas como inyecciones SQL, desbordamiento de búfer, falta de validación de los datos, entre otros.  

Análisis de Dependencias: Se enfoca en identificar las dependencias entre módulos, clases o componentes del código. Puede ayudar a identificar acoplamientos excesivos y promover una mejor modularidad.  

Análisis de Calidad de Código: Evalúa la calidad del código en función de métricas como la complejidad ciclomática, la duplicación de código, la profundidad de anidación y otros indicadores de mantenibilidad y legibilidad del código.

## Experimentación con SonarCloud
SonarCloud [3] utiliza técnicas de vanguardia en análisis estático de código para detectar problemas y posibles problemas en el código de un proyecto. Ofrece una capa adicional de verificación, distinta de las pruebas automatizadas y la revisión manual de código.   

SonarCloud Lo logra al integrarse en el canal de integración continua (CI) o plataforma de DevOps del proyecto, ampliando así la experiencia de DevOps mediante la importación de proyectos y la realización de verificaciones automáticas de código en cuestión de minutos.

Ejemplo: https://sonarcloud.io/summary/overall?id=Alessandra-NA_evershop-fork

## Referencias
1. https://owasp.org/www-community/controls/Static_Code_Analysis
2. Static Analysis: A Survey of Techniques and Tools
3. https://docs.sonarcloud.io/

