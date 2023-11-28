# Integrantes

- Caceres Gonzales, Alonso
- Espinoza Carrión, Edgar F.
- Nuñez, Alessandra
- Leite, Josue

# Entrega 22/10
## 1. Caso de Negocio
### 1. 1. Generalidades 

**Nombre de la Startup:** ExpertConnect  

**Situación de la startup:** ExpertConnect es una plataforma en línea diseñada para abordar la creciente demanda de acceso a expertos y asesoramiento especializado en una variedad de campos. La plataforma surge en un mundo cada vez más conectado y digitalizado, donde las personas buscan respuestas y orientación de expertos en diversas áreas sin la necesidad de desplazarse físicamente a una ubicación específica. Esta plataforma se enfoca en conectar a personas que necesitan asesoramiento con expertos en una amplia gama de disciplinas.  

**Estructura de la solución:**  
- Módulo de registro e inicio de sesión: Los usuarios podrán registrarse e iniciar sesión en la plataforma. Estos usuarios pueden tener dos roles: 'aprendices', quienes solicitan el servicio de asesoría, y 'mentores', profesionales que brindan estos servicios. 
- Módulo de búsqueda de profesionales: Los 'aprendices' pueden explorar perfiles de los 'mentores', ver sus calificaciones, reseñas y áreas de especialización. Pueden buscar expertos por categoría o palabras clave. También podrán buscar mentores creando publicaciones detallando la ayuda que necesitan.
- Módulo de gestión de citas: Los 'aprendices' pueden ver la disponibilidad de los 'mentores' y solicitar una reunión. Esta funcionalidad tendrá la opción para que el usuario añada la cita a su calendario de la plataforma.
- Módulo de sala de asesorías: La plataforma ofrece una solución de videollamada integrada y segura para las sesiones entre usuarios.
- Módulo de gestión de documentos y grabaciones: Tanto 'aprendices' como 'mentores' pueden compartir documentos entre sí y subir sus documentos a una carpeta propia almacenada en la nube. Junto a estos documentos, los 'aprendices' también pueden almacenar en la nube grabaciones de las asesorías bajo un costo extra.
- Módulo de chat en tiempo real: La plataforma ofrece la opción de mensajería instantánea entre 'aprendices' y 'mentores', así como soporte en tiempo real a través de un chat con un especialista.
- Módulo de pagos: Los pagos se realizan de manera segura a través de la plataforma, y ExpertConnect retiene una comisión por cada sesión de asesoramiento.
- Módulo de recomendación de mentores y aprendices: El aprendiz tendrá la opción de redactar el problema o el tema con el que necesita ayuda y un algoritmo de recomendaciones le mostrará una lista de mentores que tengan experiencia con aquellos temas.
- Módulo de resumen de videollamadas: La plataforma generará un resumen en base a la transcripción de la reunión entre aprendiz y mentor donde se recapitularán los puntos importantes hablados, los temas pendientes para la siguiente reunión, entre otros.

**Mercado de la startup**
- Profesionales Independientes: Freelancers y autónomos que pueden requerir asesoramiento en aspectos legales, fiscales, de marketing, tecnología, etc.
- Emprendedores: Personas que están lanzando sus propios negocios y necesitan orientación en estrategia empresarial, financiación, desarrollo de productos, etc.
- Estudiantes: Estudiantes universitarios que buscan asesoramiento académico y profesional de expertos en su campo de estudio.
- Otros interesados: Ejm: Personas en busca de consejos de carrera y orientación profesional para mejorar sus oportunidades laborales.

### 1.2. Modelo de Negocio (canvas)
![modelo del negocio](https://github.com/DarkShadow76/ArquiSoft-Grupo1/blob/master/canvasv3.png)

### 1.3. Estructura del equipo
![estructura del equipo](https://github.com/DarkShadow76/ArquiSoft-Grupo1/blob/master/Estructura%20del%20equipo.png)

### 1.4. Listado de stakeholders

| Rol  | Encargado | Descripción |
| --- | --- | ------ |
| Cliente  | Usuarios | Para este proyecto, los clientes interesados son los usuarios finales (profesionales y clientes que pagan por el servicio de asesoría). |
| Gestor del negocio  | Alessandra Nuñez | Asegura que la arquitectura del proyecto se alinee con las metas de la empresa. |
| Arquitecto de software  | Josue Leite | Define la arquitectura y se asegura que se cumplan los requerimientos establecidos. |
| Diseñador  | Alonso Caceres | Responsable de aplicar la arquitectura del proyecto en referencia a los requerimientos centrados para el mismo. |
| Implementador e integrador  | Alessandra Nuñez | Desarrolla e integra diferentes elementos y componentes en función del diseño de requerimientos y arquitectura. |
| Responsable de mantenimiento  | Edgar Espinoza | Asegura el funcionamiento correcto del proyecto, solucionando cualquier problema que se presente a lo largo de su vida. |
| Analista  | Alonso Caceres | Asegura que el sistema cumpla con los requerimientos de calidad y que se ajuste a lo que espera el cliente y el negocio. |

## Requerimientos del sistema
### Requerimientos funcionales
1. Módulo de registro e inicio de sesión  
    - **RF1. Registro de Usuarios:** La plataforma debe permitir que dos tipos de usuarios, clientes y profesionales, se registren proporcionando información personal, de contacto y detalles de su profesión al crear sus cuentas. Además, los profesionales deben poder listar sus servicios en la plataforma, incluyendo descripciones detalladas, tarifas y disponibilidad para que los clientes puedan acceder a esta información al buscar servicios.  
    - **RF2. Inicio de sesión:** Tanto los usuarios como los profesionales deben tener la capacidad de iniciar sesión en sus cuentas utilizando su correo y contraseña.
    - **RF12. Registro de Usuarios:** El sistema debe enviar un correo electrónico de confirmación al usuario tras la creación de una cuenta.
    - **RF13. Registro de Usuarios:** El sistema   que el email no esté siendo utilizado en otra cuenta ya ingresada en el sistema, pues solo se permite una cuenta por usuario.
2. Módulo de búsqueda de profesionales  
    - **RF3. Búsqueda de Profesionales:** Los usuarios deben tener la posibilidad de buscar profesionales según categorías, ubicación, calificaciones y otros criterios relevantes.
    - **RF9. Calificaciones y Reseñas:** Los usuarios deben poder calificar y dejar reseñas sobre los profesionales y los servicios ofrecidos, permitiendo que los profesionales respondan a estas reseñas.
    - **RF16. Creación de publicaciones:** Los usuarios deben crear publicaciones a través de un formulario donde podrán detallar el tema que necesitan revisar con los mentores. Estas publicaciones se mostrarán en una sección de la plataforma a la cual los mentores podrán acceso para leer y ponerse en contacto con los aprendices
3. Módulo de gestión de citas  
    - **RF5. Sistema de Reserva de Citas:** Los usuarios deben poder programar citas con profesionales según la disponibilidad de estos, recibiendo confirmaciones por correo electrónico o mensajes de texto.  
    - **RF6. Gestión de Citas:** Los usuarios y profesionales deben poder ver y administrar sus citas programadas, con la opción de cancelar o reprogramar citas cuando sea necesario.  
    - **RF10. Sistema de Notificaciones:** Los usuarios deben recibir notificaciones sobre citas programadas, mensajes nuevos y otros eventos relevantes dentro de la plataforma.  
4. Módulo de creación de sala de conferencias  
    - **RF7. Videoconferencias:** La plataforma debe incluir una función de videoconferencia integrada para las asesorías programadas, permitiendo que usuarios y profesionales se conecten en el horario acordado.  
    - **RF11. Videoconferencias:** La plataforma debe permitir el acceso de invitados a traves de un enlace generado por el mentor. se les pedira que ingresen su nombre y tendran que ser aprobados por el mentor. 
        ![VideoConferencia](https://github.com/DarkShadow76/ArquiSoft-Grupo1/blob/master/Wireframes/Modulo%20de%20Creacion%20de%20sala%20de%20videoconferencias/Video%20-%20Reservar%20Asesoria.png)
    - Historial de Reuniones
        ![Historico de Reuniones](https://github.com/DarkShadow76/ArquiSoft-Grupo1/blob/master/Wireframes/Modulo%20de%20Creacion%20de%20sala%20de%20videoconferencias/Video%20-%20Historico%20de%20reuniones.png)

5. Módulo de gestión de documentos y grabaciones  
        ![mis archivos](https://github.com/DarkShadow76/ArquiSoft-Grupo1/blob/master/Wireframes/Módulo%20de%20archivos/imagen_2023-09-20_212831592.png)
    - **Subida de archivos:** Los usuarios deben poder subir archivos en cualquier formato a su carpeta de Archivos. El límite de almacenamiento gratuito por usuario será de 1GB.
    - **Opción de fingerprinting (firma digital):** Para cada archivo a subir, deberá haber una opción de fingerprinting como garantía de la integridad y autenticidad.
        ![subida archivos](https://github.com/DarkShadow76/ArquiSoft-Grupo1/blob/master/Wireframes/Módulo%20de%20archivos/imagen_2023-09-20_213043086.png)
    - **Lectura de archivos:** Los usuarios deben poder abrir y leer en línea archivos en los formatos .pptx, .xlsx, .docx y .txt.
        ![lectura archivos](https://github.com/DarkShadow76/ArquiSoft-Grupo1/blob/master/Wireframes/Módulo%20de%20archivos/imagen_2023-09-20_213104763.png)
    - **Grabaciones en la nube:** Si el usuario realizó el pago para que la asesoría sea almacenada en la nube, esta se almacenará en una nueva sección en la carpeta de Archivos del usuario.
    - **Gestión de archivos:** Tanto para archivos subidos por el usuario como las grabaciones de las asesorías, los usuarios podrán copiar, pegar, mover entre carpetas, eliminar y crear enlaces para compartir estos archivos o grabaciones.
        ![gestion archivos](https://github.com/DarkShadow76/ArquiSoft-Grupo1/blob/master/Wireframes/Módulo%20de%20archivos/imagen_2023-09-20_213004043.png)
6. Módulo de pagos  
    - **RF4. Carrito de Compras y Pago Integrado:** Los usuarios deben poder agregar servicios al carrito de compras y realizar pagos seguros en línea para reservar citas o adquirir servicios.
    - **RF14. Pasarela de Pago:** El módulo debe permitir a los usuarios realizar pagos con tarjetas de crédito, débito y PayPal principalmente.
    - **RF15. Confirmación de Pago:** El sistema debe enviar un mensaje el cual recompila la información del pago realizado por el aprendiz, especificando el monto pagado y algunas cualidades de la reunión.

7. Módulo de chat en tiempo real  
    - **RF8. Chat en Tiempo Real:** Debe existir la capacidad de comunicación en tiempo real a través de chat para que los usuarios y profesionales puedan interactuar antes y después de programar una cita, con notificaciones para mensajes nuevos. 

8. Módulo de recomendación de mentores y aprendices
   - **RF17. Recomendación de mentores:** Luego que los aprendices suban su publicación de búsqueda de asesoría, automáticamente la plataforma usará un algoritmo de recomendación que relacionará el contenido de la publicación con las descripciones de los servicios que los mentores ofrecen. Se le mostrará al aprendiz la lista de mentores.
   - **RF18. Recomendación de aprendices:** El algoritmo de recomendación correrá también para los usuarios mentores, mostrando en el inicio las publicaciones con mayor relevancia para los mentores de acuerdo a la descripción que llenaron al registrarse.
     
9. Módulo de resumen de videollamadas
    - **RF19. Generación de resumenes:** De la transcripción obtenida de lo conversado en la videollamada y videoconferencia, se generará con un algoritmo un resumen de los temas vistos en la reunión. Cada usuario participante de la reunión tendrá una copia del resumen asociada a su historial de reuniones.
    - **RF20. Generación de tareas:** De la transcripción, se identificarán las tareas (en caso hayan) que el mentor dejó para el aprendiz. Estas tareas serán mostradas en un tablero tipo Kanban en una sección compartida para el mentor y el aprendiz.

  
### Escenarios de atributos de calidad
ID | Atributo | Fuente | Estímulo | Artefacto | Entorno | Respuesta | Medida
--- | --- | --- |--- |--- |--- | --- | ---
ESC-01 | Disponibilidad | Usuario | El usuario busca visualizar el listado de profesionales activos en el sistema | Módulo de búsqueda de profesionales | Operacion bajo los estandares de normalidad | El modulo de busqueda de profesionales recuperara el listado de profesionales presentes | La búsqueda de profesionales se completa en 2 segundos o menos.
ESC-02 | Disponibilidad | Usuario | El usuario busca realizar una transaccion bancaria a travez del sistema integrado en la aplicacion | Módulo de pagos | Operacion bajo los estandares de normalidad | El modulo de pagos realizara la transaccion, dependiendo del funcionamiento actual del sistema integrado de pagos | El tiempo de respuesta del modulo de pagos es de 8 segundos o menos.
ESC-03 | Mantenibilidad | Equipo de desarrollo | Necesidad de mejorar la funcionalidad del sistema de notificaciones en tiempo real | Módulo de notificaciones | Entorno de desarrollo de la plataforma, repositorio de código | La actualización se completa sin afectar otras áreas funcionales de la plataforma | La cantidad de bugs introducidos en los otros módulos es 0
ESC-04 | Mantenibilidad | Fallo crítico  | Usuarios detectan un error en la función de programación de citas | Código fuente de la plataforma | Producción en vivo de la plataforma | El equipo de desarrollo aisla el módulo fallido y resuelve el fallo crítico en la plataforma | La plataforma se restaura en menos de 1 hora
ESC-05 | Rendimiento | Usuarios | Multiples usuarios dan uso al sistema de busqueda de profesionales al mismo tiempo | Módulo de búsqueda de profesionales, servidores de la plataforma | Conexión a Internet estable en todos los usuarios | El sistema de busqueda de profesionales busca resolver cada transaccion de datos con normalidad y se mantiene | Tiempo de procesamiento de 2 segundos.
ESC-06 | Seguridad | Usuario | El usuario busca ingresar a una cuenta, pero falla el sistema de verificacion de identificacion base 3 veces seguidas | Módulo de registro e inicio de sesión | Operacion bajo los estandares de normalidad | El sistema deniega los siguientes intentos de ingreso por parte de ese usuario y se informa al titular de la cuenta de un posible intento de ingreso no legitimo | El sistema bloquea temporalmente el acceso a la cuenta y registra el incidente.
ESC-07 | Seguridad | Usuarios | El usuario sube documentos que contienen información personal y confidencial. | Módulo de almacenamiento de archivos | Conexión a Internet estable, navegador web actualizado. | La plataforma cifra y almacena los documentos de forma segura. | Los documentos solo son accesibles para el usuario.
ESC-08 | Usabilidad | Usuarios | El usuario abre la plataforma desde Colibri Web Browser | Plataforma ExpertConnect | Conexión a Internet estable, navegador basado en Chromium | La plataforma se carga correctamente en el navegador al tener soporte para Chromium | La plataforma es funcional y presenta una interfaz de usuario coherente en el navegador
ESC-09 | Rendimiento | Mentor y aprendices invitados | El mentor inicia una conferencia y se unen cientos de invitados al mismo tiempo | Módulo de videoconferencias de la plataforma, servidores de la plataforma | Conexiones a Internet variadas de los usuarios | Los participantes pueden unirse a la conferencia sin problemas y disfrutan de una experiencia de video y audio fluida | Los recursos del servidor no excedan el 80% de su capacidad máxima
### Restricciones 
- La aplicación se basará en un entorno web únicamente.
- El sistema se desarrollará con un único lenguaje de programación en mente, el cual será JavaScript.
- La plataforma deberá ser completada a mediados de diciembre y se deben realizar el desarrollo, las pruebas y el envío a producción.


## Decisiones a Nivel de Arquitectura

### Asignación de Responsabilidades
- **Módulo de registro e inicio de sesión:** Módulo responsable del registro y autentificación de los usuarios.
- **Módulo de búsqueda de profesionales:** Módulo responsable de presentar a los usuarios profesionales en la plataforma, permitiendo la búsqueda entre estos.
- **Módulo de gestión de citas:** Módulo responsable en la coordinación y preparación de las citas con los profesionales.
- **Módulo de creación de sala de conferencias:** Módulo responsable de la creación de las conferencias, al igual que el aseguramiento de su seguridad.
- **Módulo de gestión de documentos y grabaciones:** Módulo encargado del almacenamiento de datos relacionados con las conferencias, asegurando su disponibilidad e integridad.
- **Módulo de pagos:** Módulo encargado de la pasarela de pagos y las implementaciones relacionadas.
- **Módulo de chat en tiempo real:** Módulo encargado de permitir una comunicación directa entre el profesional y el usuario antes de la cita programada.
- **Módulo de recomendación de mentores y aprendices:** Módulo encargado de recomendar mentores y aprendices en base a las publicaciones de búsqueda de asesoría y los servicios que se ofrecen en la plataforma.
- **Módulo de resumen de videollamadas:** Módulo encargado de convertir las transcripciones de las reuniones en resúmenes y de generar un listado de tareas pendientes.

### Modelo de Coordinación
El proyecto implementará conexiones asíncronas y síncronas para su correcto funcionamiento.

- **Comunicación síncrona:** Será implementada para el módulo de chat en tiempo real, el módulo de videollamadas y finalmente el módulo de registro y autentificación.
- **Comunicación asíncrona:** Será implementada para el módulo de pagos, el módulo de almacenamiento de grabaciones y archivos, el módulo de gestión de citas, el módulo de recomendaciones y el módulo de resúmenes y tareas.

### Modelo de Datos
- **Base de datos relacional:** El modelo de datos relacional se utilizará para almacenar información personal y de contacto de los mentores y de los aprendices, la información del módulo de gestión de citas, el historial de pagos y de reuniones y los resúmenes de transcripciones y tareas pendientes.

- **Base de datos no relacional:** El modelo de datos no relacional se empleará para almacenar los mensajes instantáneos que tiene el módulo de chat en tiempo real, ya que en este chat se podrán enviar fotos y documentos, aparte de texto.

- **Almacenamiento simple de objetos:** Se usará un lugar de almacenamiento para guardar y acceder a los archivos subidos por los usuarios y las grabaciones de las reuniones. Cada objeto tendrá metadatos asociados para poder ser leídos por el backend de la plataforma.

### Mapeo entre Elementos de Arquitectura
- Diagrama de Contexto (C1)  
![diagrama c1](https://github.com/DarkShadow76/ArquiSoft-Grupo1/blob/master/DiagramaC1-v2.png)
- Diagrama de Contenedores (C2)  
![diagrama c2](https://github.com/DarkShadow76/ArquiSoft-Grupo1/blob/master/DiagramaC2-v2.png)
- Diagrama de Componentes (C3)  
![diagrama c3](https://github.com/DarkShadow76/ArquiSoft-Grupo1/blob/master/DiagramaC3-v2.png)
 
### Elección de Tecnología
- **Frontend:** Angular y Angular Material para la interfaz de usuario. Se eligió esta opción pues es un Framework y brinda un marco de trabajo predefinido , lo cual sirve mucho para un proyecto complejo como este donde se necesita algo robusto y dinámico.
- **Backend:** Node.js es una opción sólida para construir aplicaciones en tiempo real (videollamadas y mensajería) y escalables. Se usará Express.js ya que es muy eficiente para aplicaciones que dependen del tiempo de respuesta, por ejemplo, notificaciones, chat entre usuarios , videollamadas.
- **Bases de datos:** DynamoDB como opción para almacenar datos no estructurados (mensajería) ya que brinda mayor velocidad de lectura de datos y PostgreSQL para los datos estructurados en donde se necesita mayor integridad, por ejemplo data de los usuarios, sus pagos, citas, historial de reuniones, resúmenes de transcripciones y tareas. 
- **Pasarela de pagos:** Al ser una iniciativa que apunta al mercado internacional, se usarán las pasarelas de pagos Stripe y PayPal.
- **Almacenamiento en la nube:** Se usará Amazon S3 debido a su capacidad para manejar grandes cantidades de datos para almacenar archivos y videos, en el mercado es la opción más rentable de todas las que permiten pago por uso.
- **Envío de correos:** Se usará Amazon SES, ya que ofrece una alta tasa de entrega de correos por la reputación de IP de AWS, es una solución sólida a gran escala y es confiable.
- **Videollamadas:** Se usará el servicio de Agora.io para las videollamadas y videoconferencias, ya que provee calidad de video según el pago por uso y soporte de UI , a diferencia de sus dos principales competidores Twilio y Dyte.
- **Alta disponibilidad:** AWS RDS con MultiAZ y backups , se eligió este debido a que da una mejor disopnibilidad y opciones de respaldo a comparación de sus competidores Azure u Oracle.
- **Balanceo de carga:** Amazon Elastic Load Balancing para el tráfico entre instancias, lo cual permite una distribución equitativa en este tráfico.
- **Monitoreo:** Amazon CloudWatch y CloudWatch Alarms para el monitoreo y alertas de detección de problemas.
- **CI/CD:** AWS CodePipeline, sus principales competidores no ofrecen este servicio para integrarse con AWS.
- **Consultas en caché:** Memcached , se eligió este para mantener el entorno en AWS.
- **Cifrado de datos:** AWS Key Management Service para las claves de cifrado de las contraseñas, claves de las APIs, gestionar las claves de RDS, AWS ofrece este servicio dentro del mismo entorno , lo que lo hace más sencillo que usar servicios de terceros.
- **Despliegue:** Se desplegará en AWS EC2 por su robustez y costos de pago por uso, el cual en aspecto económico sale con menor presupuesto que usar Azure u Oracle.

## Tácticas 

### Disponibilidad 
La disponibilidad es sumamente importante considerando que la plataforma brinda un servicio de videoconferencias de manera síncrona. Este servicio puede coordinarse para darse a cualquier hora, desde cualquier parte del mundo, lo que debe estar activo la mayor parte del tiempo posible. 

Se esperan que las medidas de respuesta sean las siguientes:
- Tiempo de disponibilidad del sistema: 99.9% (Inactivo 8.76h en el año)
- Tiempo para detectar la falla: Entre 10 a 25 minutos como máximo
- Tiempo para recuperarse de la falla: Entre 30 minutos a 1.5 horas como máximo.

**Tácticas a emplear:**

- **Despliegue en múltiples zonas de AWS:** Para garantizar la alta disponibilidad, puedes configurar la infraestructura en al menos dos zonas de disponibilidad de AWS. Utiliza servicios como Amazon Elastic Load Balancing (ELB) para distribuir el tráfico entre instancias en diferentes zonas y así evitar un único punto de fallo.

- **Amazon RDS MultiAZ:** Configura Amazon RDS en modo Multi-AZ para asegurarnos de que haya redundancia de datos y alta disponibilidad en caso de fallas.

- **Monitoreo y alertas:** Utiliza Amazon CloudWatch para monitorear el sistema y configura CloudWatch Alarms para detectar problemas antes de que afecten la disponibilidad. Por ejemplo, Se implementaran alarmas para la utilización de recursos, como el uso de CPU o memoria. 

### Mantenibilidad

En cuanto a la facilidad de mantener el sistema en buen funcionamiento, es esencial que cualquier modificación o mejora se pueda abordar de manera eficaz y sin dificultades. La capacidad de mantenimiento contribuye a un proceso de desarrollo más fluido y a una reducción en el tiempo necesario para implementar nuevas actualizaciones.

**Tácticas a emplear:**

- **Modularidad:** División de la aplicación en módulos independientes, como el módulo de usuario, módulo de videoconferencia y módulo de documentos. Esto facilitara el desarrollo y la modificación de componentes sin afectar a otros.

- **CI/CD con AWS CodePipeline:** Se implementa un flujo de trabajo de Integración Continua/Entrega Continua (CI/CD) con AWS CodePipeline. Esto te permitirá realizar actualizaciones y despliegues de manera automatizada, reduciendo el tiempo de inactividad y facilitando el mantenimiento.

### Interoperabilidad

La interoperabilidad se refiere a la capacidad de sistemas, aplicaciones o componentes de software para comunicarse, interactuar y funcionar de manera efectiva y armoniosa entre sí, incluso si han sido desarrollados por diferentes proveedores o en distintas plataformas. Es un concepto esencial en el mundo de la tecnología de la información y las comunicaciones, ya que permite que sistemas heterogéneos colaboren y compartan datos de manera eficiente.

**Tácticas a emplear:**

- **Servicios Web y API RESTful:** Diseña interfaces de programación de aplicaciones (API) basadas en REST para permitir la comunicación entre sistemas de manera sencilla. Documenta las API para que otros desarrolladores puedan entender y utilizar tus servicios.

- **Middleware de Integración:** Implementación middleware o capas de integración que faciliten la comunicación y la transferencia de datos entre sistemas heterogéneos. Utiliza servicios como AWS Lambda para realizar tareas de integración.

- **Estandarización de Protocolos y Formatos de Datos:** Utilización de formatos de datos comunes y legibles por humanos, como JSON o XML, para facilitar la comunicación entre sistemas. Para asegurar el seguimiento estándares de la industria cuando sea posible.

### Rendimiento
El rendimiento conlleva el enfoque en la capacidad del sistema en poder manejar y cumplir la carga de trabajo esperada, respondiendo de manera oportuna y manteniendo una estabilidad al hacerlo.

Se esperan que las métricas dé respuesta sean las siguientes:
Máximo de 5 segundos de demora cada transacción.

**Tácticas a emplear:**

- **Monitoreo del rendimiento de base de datos:** Utilizar Amazon RDS y Amazon CloudWatch para monitorear el rendimiento de la base de datos. Ajustar los recursos de la base de datos según el uso para garantizar un rendimiento óptimo.

- **Almacenamiento en caché con Memcached:** Implementa un sistema de almacenamiento en caché, como Memcached, para acelerar las consultas de búsqueda frecuentes y reducir la carga en la base de datos.

### Seguridad
La seguridad es un aspecto crítico en cualquier proyecto de desarrollo de software. La falta de medidas de seguridad adecuadas puede exponer sistemas y datos a amenazas como ataques cibernéticos, robo de información, interrupciones del servicio y otros riesgos. A continuación, información sobre las tácticas clave para garantizar la seguridad en el presente proyecto de desarrollo de software:

**Tácticas a emplear:**

- **Autenticación y Autorización:** Implementa un sólido sistema de autenticación para verificar la identidad de los usuarios. Utiliza mecanismos de autorización para controlar el acceso a las funciones y los datos según los roles y permisos de cada usuario. Se puede utilizar servicios de AWS Identity and Access Management (IAM) para gestionar permisos.

- **Cifrado de datos en reposo:** Utiliza AWS Key Management Service (KMS) para administrar las claves de cifrado de contraseñas, claves de APIs y bases de datos. Asegúrate de cifrar datos sensibles en reposo.

- **Pruebas de penetración:** Realizar pruebas de penetración periódicas utilizando herramientas como OWASP ZAP para identificar vulnerabilidades y fortalecer la seguridad del sistema.

- **Autenticación de dos factores:** Implementar la autenticación de dos factores (2FA) para los usuarios, lo que proporciona una capa adicional de seguridad al requerir un segundo método de autenticación además de la contraseña.

## Borrador de arquitectura

![arqui](https://github.com/DarkShadow76/ArquiSoft-Grupo1/blob/master/Diagrama-arquitectura.png)

## Workshop de Atributos de Calidad (QAW)

### Paso 1: Presentación de la metodología

En esta sección, se empleará el Workshop de Atributos de Calidad (QAW) como metodología de identificación, análisis y priorización de los requisitos de calidad para esta plataforma.

Objetivo de la realización del workshop: Identificar y refinar los atributos de calidad relevantes para la implementación de la plataforma ExpertConnect.

Participantes: Alonso Cáceres (Analista / Diseñador), Edgar Espinoza (Responsable de mantenimiento), Alessandra Nuñez (líder del proyecto, gestor de negocio), Josue Leite (Arquitecto de software).

### Paso 2: Presentación del negocio (misión)

"La misión de ExpertConnect es proporcionar una plataforma en línea que conecte a personas que necesitan asesoramiento con expertos en una amplia gama de disciplinas. Nuestra plataforma busca abordar la creciente demanda de acceso a expertos y asesoramiento especializado en un mundo cada vez más conectado y digitalizado. Estamos comprometidos en brindar un servicio de alta calidad y en garantizar que nuestros usuarios tengan acceso a los servicios de asesoramiento que necesitan de manera fácil y segura 

Para garantizar que nuestra plataforma cumpla con las expectativas de los usuarios y sea exitosa en el mercado, hemos identificado los atributos de calidad más importantes para su implementación. La seguridad es una prioridad para nosotros, por lo que hemos implementado medidas de seguridad para proteger la información de nuestros usuarios. Además, la escalabilidad es importante para garantizar que la plataforma pueda manejar un gran número de usuarios y transacciones. Por último, la facilidad de uso es fundamental para brindar una experiencia de usuario satisfactoria y garantizar que los usuarios puedan acceder fácilmente a los servicios de asesoramiento que necesitan."

### Paso 3: Presentación del Plan de Arquitectura

Presentación general de la idea de arquitectura a emplear en ExpertConnect:

![diagrama c3](https://github.com/DarkShadow76/ArquiSoft-Grupo1/blob/master/DiagramaC3-v2.png)

### Paso 4: Identificación de drivers de arquitectura

Para ExpertConnect, los principales atributos de calidad que se desea asegurar son los atributos de usabilidad y disponibilidad. Al ser los usuarios de la plataforma de cualquier edad, se busca que cualquier persona pueda usar la plataforma sin necesidad de guías o capacitaciones, de forma intuitiva y facil. Asimismo, la plataforma debe estar disponible la mayor cantidad de tiempo posible, pues las reuniones programadas entre mentores y aprendices pueden darse en cualquier hora del día.

Entre otros, están los atributos de Seguridad, Mantenibilidad y Rendimiento.

### Paso 5 al 8:

https://docs.google.com/spreadsheets/d/1Xu976dNTox09go_x45Mka7bK8sjiIgDE/edit?usp=sharing&ouid=110103374564516016539&rtpof=true&sd=true

## Proceso de Diseño (ADD)

### Drivers de Arquitectura
- Propósito: Se busca a través de esta plataforma brindar una solución donde las personas puedan buscar u ofrecer asesorías en distintos campos (idiomas, carreras, emprendimientos, etc), de manera facil y rápida.
- Atributos de calidad: Del QAW: Disponibilidad, usabilidad, seguridad, mantenibilidad, rendimiento
- Funcionalidad primaria
  - UC-1: Registro e inicio de sesión
  - UC-2: Asesorías integradas (videollamadas/videoconferencias)
  - UC-3: Chat en tiempo real
  - UC-4: Búsqueda de profesionales
  - UC-5: Almacenamiento de archivos y grabaciones
  - UC-6: Pagos integrados
- Preocupaciones a nivel de arquitectura: 
  - CRN-1: Establecer una estructura inicial de la plataforma
  - CRN-2: Definir una arquitectura fácil de escalar y mantener
  - CRN-3: Implementar una diferenciación de las responsabilidades y capacidades de cada módulo independiente del sistema
- Requerimientos internos:
  - Gestión de Logs: Se deben registrar eventos relevantes en logs para dar seguimiento a problemas y cumplir con procesos de auditoría.
  - Actualizaciones periódicas: Se deben realizar actualizaciones de prevención (o nuevas funcionalidades) y/o correcciones de errores detectados.
- Problemas: 
  - Dependencia de sistemas externos: Se pueden dar problemas de disponibilidad en cuanto a las reuniones entre usuarios, pues depende de la disponibilidad de Agora.io. El mismo problema con el uso de Stripe y PayPal.
- Restricciones:
  - CON-1: Inicialmente, el sistema debe soportar al menos 1000 usuarios en simultáneo
  - CON-2: Se debe poder acceder al sistema desde Chrome V3+ , Brave V1.6+, IE8+ ; en las plataformas de Windows, MacOS y Linux.
  - CON-3: Servidor de base de datos para datos relacionales y base de datos para datos no relacionales
  - CON-4: La plataforma debe estar disponible y accesible en al menos un 95% del tiempo total del año.
  - CON-5: La plataforma debe optimizar el rendimiento del sitio para tener tiempos de carga rápidos y respuesta rápida durante las sesiones de asesoramiento.
  - CON-6: Implementación de pasarelas de pago seguras y sistemas para gestionar tarifas, comisiones y transacciones financieras.
  - CON-7: Utilizar patrones de diseño eficientes como pool de conexiones, lazy loading, entre otros para optimizar la interacción.

### - ITERACIÓN 1 -

### Paso 1: Revisar entradas

Propósito | Funcionalidad primaria | Escenarios de calidad (del QAW) | Restricciones y preocupaciones
--- | --- | --- |---
Plataforma desde 0. Se busca producir un diseño detallado. | UC-2, UC-3, UC-4 soportan la funcionalidad base | QA-2, QA-4, QA-10, QA-12 | CRN-1, CON-3, CON-4, CON-5, CON-6

### Paso 2: Establecer objetivo de la iteración

En base a las entradas especificadas, el objetivo de esta primera iteración es realizar un diseño inicial de la estructura de la plataforma, abarcando los atributos más importantes de disponibilidad, rendimiento y seguridad  

### Paso 3: Elegir uno o más elementos del sistema a refinar

No hay elementos a refinar, pues se está diseñando el sistema desde 0.

Diagrama de contexto:

![diagrama c1](https://github.com/DarkShadow76/ArquiSoft-Grupo1/blob/master/DiagramaC1-v2.png)

### Paso 4: Elegir uno o más conceptos de diseño que satisfacen el driver seleccionado

ID | Decisión de diseño | Fundamento
--- | --- | ---
DEC-1 | App front y back serán deployeados en un EC2 | Se escoge Amazon EC2 para aprovechar la facilidad de escalamiento horizontal y vertical y por su facil integración con otros servicios de AWS a usar
DEC-2 | Base de datos relacional en RDS y uso de DynamoDB | Se creará una instancia de la BD relacional en RDS con el fin de poder aprovechar en futuras iteraciones las ventajas de este servicio de AWS y se usará DynamoDB por su integración con otros servicios
DEC-3 | Patrón de despliegue three-tier | La interfaz desarrollada en Angular será el nivel de presentación, el backend en NodeJS será el nivel de aplicación y las bases de datos Postgresql y DynamoDB serán el nivel de datos
DEC-4 | Interfaz de plataforma en Angular y TailwindCSS | Se usa esta tecnología Angular por ser conocida por los desarrolladores + Tailwind para facilitar el diseño UI
DEC-5 | MVC en backend | Se usa MVC para tener un mejor manejo de código y por ende mayor modificabilidad

### Paso 5: Instanciar elementos de arquitectura, asignar responsabilidades y definir interfaces
- Amazon EC2: Implementacion de un servicio web externo en la nube, principalmente por la facilidad de implementacion de diversos servicios AWS.
- Patron de despliegue three-tier: Despliege de la aplicacion en tres capas: presentacion, aplicacion y datos. 
- Patron de arquitectura MVC: Implementacion del patron MVC para la arquitecruta del backend de la aplicacion web.

### Paso 6: Bosquejar vistas y registrar decisiones de diseño

- [Asesorias integradas](https://github.com/ulima-arqui-sw/grupo01/tree/dev/Wireframes/Modulo%20de%20Creacion%20de%20sala%20de%20videoconferencias)
- [Busqueda de profesioanles](https://github.com/ulima-arqui-sw/grupo01/tree/dev/Wireframes/M%C3%B3dulo%20de%20busqueda%20de%20profesionales)

### PASO 7: Analizar el diseño actual, revisar objetivo de la iteración y logro del propósito de diseño

No Abordado | Parcialmente Abordado | Completamente Abordado | Decisión de diseño
--- | --- | --- | ---
UC-2
| | UC-3 | | DEC-2, DEC-4
| | UC-4 | | DEC-2, DEC-4
| | QA-2 | | DEC-1, DEC-3
QA-4
QA-10
| | QA-12 | | DEC-5
| | CRN-1 | | Todos
| | | CON-3 | DEC-2
| | CON-4 | | DEC-1, DEC-2
CON-5
CON-6

### - ITERACIÓN 2 -

### Paso 2: Establecer objetivo de la iteración

El objetivo de esta iteración será identificar las estructuras que soportan a los elementos de funcionalidad primaria. Para esta iteración, se podrían priorizar por dificultad e importancia los casos de uso, teniendo así los UC 2, 3, 4 y 5.

### Paso 3: Elegir uno o más elementos del sistema a refinar

Se refinarán las capas de arquitectura que fueron definidas en la iteración anterior.

### Paso 4: Elegir uno o más conceptos de diseño que satisfacen el driver seleccionado

ID | Decisión de diseño | Fundamento
--- | --- | ---
DEC-6 | Crear modelo de dominio | Se debe crear un modelo inicial documentando las principales entidades y sus relaciones
DEC-7 | Identificar objetos de dominio y descomponer en módulos | Esto para seguir las practicas de modularidad y reusabilidad
DEC-8 | Uso de caching | Para agilizar las consultas más usadas (ejm: mentores destacados)
DEC-9 | S3 para el almacenamiento de archivos | Se almacenarán en un S3 los archivos y grabaciones que los usuarios deseen subir
DEC-10 | Uso de solución de videollamadas Agora.io | Por su escalabilidad, servidores distribuidos y fácil integración

### Paso 5: Instanciar elementos de arquitectura, asignar responsabilidades y definir interfaces

### Paso 6: Bosquejar vistas y registrar decisiones de diseño

### PASO 7: Analizar el diseño actual, revisar objetivo de la iteración y logro del propósito de diseño

### - ITERACIÓN 3 -

### Paso 2: Establecer objetivo de la iteración

En esta tercera iteración se busca refinar las iteraciones anteriores y continuar abarcando los escenarios de atributos de calidad restantes. En este caso, se elegirá refinar el atributo de Disponibilidad

### Paso 3: Elegir uno o más elementos del sistema a refinar

Se refinarán el elemento de despliegue: servidor de BD, que fue identificado en la primera iteración

### Paso 4: Elegir uno o más conceptos de diseño que satisfacen el driver seleccionado

ID | Decisión de diseño | Fundamento
--- | --- | ---
DEC-11 | Escalabilidad vertical | RDS permite aumentar o disminuir la capacidad de la instancia de base de datos en función de la demanda
DEC-12 | Replicación | RDS ofrece replicación multi-AZ, que implica mantener una copia sincrónica de la base de datos en una zona de disponibilidad secundaria, lo que mejora la disponibilidad y la tolerancia a fallos.
DEC-13 | Monitoreo y alertas | Utilizar Amazon CloudWatch para monitorear métricas clave y establecer alarmas es importante para asegurar la disponibilidad

### Paso 5: Instanciar elementos de arquitectura, asignar responsabilidades y definir interfaces

### Paso 6: Bosquejar vistas y registrar decisiones de diseño

### Paso 7: Analizar el diseño actual, revisar objetivo de la iteración y logro del propósito de diseño