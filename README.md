# Integrantes

- Caceres Gonzales, Alonso
- Espinoza Carrión, Edgar F.
- Nuñez, Alessandra
- Leite, Josue

# Primer avance
## 1. Caso de Negocio
### 1. 1. Generalidades 

**Nombre de la Startup:** ExpertConnect  

**Situación de la startup:** ExpertConnect es una plataforma en línea diseñada para abordar la creciente demanda de acceso a expertos y asesoramiento especializado en una variedad de campos. La plataforma surge en un mundo cada vez más conectado y digitalizado, donde las personas buscan respuestas y orientación de expertos en diversas áreas sin la necesidad de desplazarse físicamente a una ubicación específica. Esta plataforma se enfoca en conectar a personas que necesitan asesoramiento con expertos en una amplia gama de disciplinas.  

**Estructura de la solución:**  
- Módulo de registro e inicio de sesión: Los usuarios podrán registrarse e iniciar sesión en la plataforma. Estos usuarios pueden tener dos roles: 'aprendices', quienes solicitan el servicio de asesoría, y 'mentores', profesionales que brindan estos servicios. 
- Módulo de búsqueda de profesionales: Los 'aprendices' pueden explorar perfiles de los 'mentores', ver sus calificaciones, reseñas y áreas de especialización. Pueden buscar expertos por categoría o palabras clave.  
- Módulo de gestión de citas: Los 'aprendices' pueden ver la disponibilidad de los 'mentores' y solicitar una reunión. Esta funcionalidad tendrá la opción para que el usuario añada la cita a su calendario de Google o Microsoft.
- Módulo de sala de asesorías: La plataforma ofrece una solución de videollamada integrada y segura para las sesiones entre usuarios.
- Módulo de gestión de documentos y grabaciones: Tanto 'aprendices' como 'mentores' pueden compartir documentos entre sí y subir sus documentos a una carpeta propia almacenada en la nube. Junto a estos documentos, los 'aprendices' también pueden almacenar en la nube grabaciones de las asesorías bajo un costo extra.
- Módulo de chat en tiempo real: La plataforma ofrece la opción de mensajería instantánea entre 'aprendices' y 'mentores', así como soporte en tiempo real a través de un chat con un especialista.
- Módulo de pagos: Los pagos se realizan de manera segura a través de la plataforma, y ExpertConnect retiene una comisión por cada sesión de asesoramiento.

**Mercado de la startup**
- Profesionales Independientes: Freelancers y autónomos que pueden requerir asesoramiento en aspectos legales, fiscales, de marketing, tecnología, etc.
- Emprendedores: Personas que están lanzando sus propios negocios y necesitan orientación en estrategia empresarial, financiación, desarrollo de productos, etc.
- Estudiantes: Estudiantes universitarios que buscan asesoramiento académico y profesional de expertos en su campo de estudio.
- Empresas Pequeñas y Medianas: Empresas en crecimiento que necesitan asesoramiento en áreas específicas como gestión de recursos humanos, estrategia de negocios, marketing digital, etc.
- Personas en Búsqueda de Empleo: Individuos en busca de consejos de carrera y orientación profesional para mejorar sus oportunidades laborales.

### 1.2. Modelo de Negocio (canvas)
![modelo del negocio](https://github.com/DarkShadow76/ArquiSoft-Grupo1/blob/master/canvasv1.png)

### 1.3. Estructura del equipo
![estructura del equipo](https://github.com/DarkShadow76/ArquiSoft-Grupo1/blob/master/Estructura%20del%20equipo.png)

### 1.4. Listado de stakeholders
- Clientes: Para este proyecto, los clientes interesados son los usuarios finales (profesionales y clientes que pagan por el servicio de asesoría).  
- Gestor del negocio: Asegura que la arquitectura del proyecto se alinee con las metas de la empresa.  
- Arquitecto de software: Define la arquitectura y se asegura que se cumplan los requerimientos establecidos.  
- Diseñador: Responsable de aplicar la arquitectura del proyecto en referencia a los requerimientos centrados para el mismo.  
- Implementador e integrador: Desarrolla e integra diferentes elementos y componentes en función del diseño de requerimientos y arquitectura.   
- Responsable de mantenimiento: Asegura el funcionamiento correcto del proyecto, solucionando cualquier problema que se presente a lo largo de su vida.  
- Analista: Asegura que el sistema cumpla con los requerimientos de calidad y que se ajuste a lo que espera el cliente y el negocio.  

## Requerimientos del sistema
### Requerimientos funcionales
1. Módulo de registro e inicio de sesión  
    - **RF1. Registro de Usuarios:** La plataforma debe permitir que dos tipos de usuarios, clientes y profesionales, se registren proporcionando información personal, de contacto y detalles de su profesión al crear sus cuentas. Además, los profesionales deben poder listar sus servicios en la plataforma, incluyendo descripciones detalladas, tarifas y disponibilidad para que los clientes puedan acceder a esta información al buscar servicios.  
    - **RF2. Inicio de sesión:** Tanto los usuarios como los profesionales deben tener la capacidad de iniciar sesión en sus cuentas utilizando su correo y contraseña.  
    - **RF9. Calificaciones y Reseñas:** Los usuarios deben poder calificar y dejar reseñas sobre los profesionales y los servicios ofrecidos, permitiendo que los profesionales respondan a estas reseñas.
2. Módulo de búsqueda de profesionales  
    - **RF3. Búsqueda de Profesionales:** Los usuarios deben tener la posibilidad de buscar profesionales según categorías, ubicación, calificaciones y otros criterios relevantes.  
3. Módulo de gestión de citas  
    - **RF5. Sistema de Reserva de Citas:** Los usuarios deben poder programar citas con profesionales según la disponibilidad de estos, recibiendo confirmaciones por correo electrónico o mensajes de texto.  
    - **RF6. Gestión de Citas:** Los usuarios y profesionales deben poder ver y administrar sus citas programadas, con la opción de cancelar o reprogramar citas cuando sea necesario.  
    - **RF10. Sistema de Notificaciones:** Los usuarios deben recibir notificaciones sobre citas programadas, mensajes nuevos y otros eventos relevantes dentro de la plataforma.  
4. Módulo de creación de sala de conferencias  
    - **RF7. Videoconferencias:** La plataforma debe incluir una función de videoconferencia integrada para las asesorías programadas, permitiendo que usuarios y profesionales se conecten en el horario acordado.  
    - ??RF La plataforma debe permitir el acceso de invitados a traves de un enlace generado por el mentor. se les pedira que ingresen su nombre y tendran que ser aprobados por el mentor.  
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
7. Módulo de chat en tiempo real  
    - **RF8. Chat en Tiempo Real:** Debe existir la capacidad de comunicación en tiempo real a través de chat para que los usuarios y profesionales puedan interactuar antes y después de programar una cita, con notificaciones para mensajes nuevos.  
