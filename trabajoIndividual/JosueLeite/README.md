# Trabajo Individual
Josue Leite

# Tema: Bases de Datos Clave-Valor

## Definición

### Estructura

Las bases de datos Clave-Valor son estructuras de base de datos no relacionales (NoSQL) las cuales almacenan y recuperan los datos en series de pares con las titulares claves y valores. Este modelo de base de datos se basa en un principio fundamental: cada pieza de información se almacena como un par de dos elementos titulados "clave" y "valor". Esto presenta una estructura de almacenamiento simple y ligera, enfocandose en las capacidades de escalabilidad y disponibilidad del sistema.

### Clave

Toda clave presente en esta estructura debe de ser completamente única. Esta clave de caracteres actúa como un identificador único asociado a un solo valor de la estructura. En el desarrollo usual de la estructura las calves suelen ser simples y descriptivas para facilitar la recuperación de datos.

### Valor

Mientras que los valores son conformados por datos asociados a una clave especifica. No existen limites fijos en el tipo de dato que se pueda almacenar, pues en la estructura estos elementos cargan con valores fijos, como nombres y números, hasta con conceptos complejos de la estructura como objetos, registros o estructuras de datos. Estos valores no se ven limitados como las calves, pues son capaces de presentar redundancia siempre y cuando no se vea una repetición en sus claves.

## Cualidades principales

Las bases de datos clave valor presentan una serie de cualidades que las diferencian de otras estructuras. Entre estas se encuentran:

- **Facilidad de procesamiento de transacciones:** Clave-Valor se especializa en tratar con un alto volumen de transacciones pequeñas y continuas. Este es el enfoque principal para la cual la estructura fue diseñada.

- **Alta flexibilidad:** Clave-Valor permite el almacenamiento de diversos tipos de datos, sin delimitar algun tipo de limite en los componentes que pueden conformar las claves o valores. Aun asi se sugiere que su enfoque principal se base en el almacenamiento de objetos simples, especificamente para los elementos clave.

- **Enfoque en la simplicidad:** El enfoque de las bases de datos Clave-Valor fue principalmente la implementaciones en aplicaciones con necesidad de busquedas y modificaciones rapidas, que no den uso a posibles sequencias de datos o consultas complejas. Esto se presenta tanto como una ventaja como un limite en el desarrollo de estas bases de datos.

Comparando Clave-Valor con otras estructuras dealmacenamiento de datos, se puede ver los siguientes rasgos principales:

- **Frente a bases de datos relacionales:** Clave valor se presenta como una alternativa sencilla, enfocada en transacciones simples sin presentar lenguajes de consulta. Aun que las bases de datos relacionales son muy flexibles en términos de modelado de datos, y son adecuadas para una amplia gama de aplicaciones, estas no son tan eficientes como las bases de datos clave-valor en operaciones de lectura y escritura.
- **Frente a bases de datos orientadas a grafos:** Clave valor no presenta conexiones o relaciones entre los objetos de datos. Cada dupla de claves y valores se presenta como un elemento independiente. Lo mas cercano a esto son implementaciones o emualciones creadas por cada proveedor, permitiendo agrupar un conjunto de datos bajo el valor de una dupla. Aun que esto no se presente util para aplicaciones que requieren el análisis de relaciones complejas como una estructura orientada a grafos.
- **Frente a bases de datos orientadas a documentos:** Clave valor se presenta como una alternativa simplificada de una base de datos orientada a documentos. Presenta una mayor eficiencia en sus transacciones y menos capacidad de modelado de datos. Esto presenta la posibilidad de uso en aplicaciones que requieren el almacenamiento de datos semiestructurados o no estructurados, beneficiando la eficiencia deejecucion sobre sus capacidades.
- 
## Cuando usar Clave-Valor

Las bases de datos clave-valor son una buena opción para aplicaciones que requieren un alto rendimiento en operaciones de lectura y escritura. Entre sus posibles usos tenemos:

- **Control de sesiones:** Las bases de datos clave-valor son ideales para aplicaciones que requieren un alto rendimiento en operaciones de lectura y escritura. Esto las hace ideales para el control de sesiones, que es el proceso de almacenar información sobre los usuarios de una aplicación para que puedan acceder a ella sin tener que volver a iniciar sesión cada vez.
- **Almacenamiento de caché:** Las bases de datos clave-valor también son ideales para el almacenamiento de caché, que es el proceso de almacenar datos que se utilizan con frecuencia en un lugar de acceso rápido para que puedan ser recuperados rápidamente. Esto puede mejorar el rendimiento de las aplicaciones al reducir la necesidad de acceder a los datos de origen.
- **Listados personalizados:** Las bases de datos clave-valor también se pueden usar para almacenar listados personalizados, como preferencias o recomendaciones en tiendas. Esto puede ayudar a mejorar la experiencia del usuario al mostrarles información que es relevante para ellos.


