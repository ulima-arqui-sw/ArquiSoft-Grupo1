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
![alt text](https://github.com/DarkShadow76/ArquiSoft-Grupo1/blob/master/canvasv1.png)

### 1.3. Estructura del equipo

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
**RF1. Registro de Usuarios:** La plataforma debe permitir que dos tipos de usuarios, clientes y profesionales, se registren proporcionando información personal, de contacto y detalles de su profesión al crear sus cuentas. Además, los profesionales deben poder listar sus servicios en la plataforma, incluyendo descripciones detalladas, tarifas y disponibilidad para que los clientes puedan acceder a esta información al buscar servicios.  
**RF2. Inicio de sesión:** Tanto los usuarios como los profesionales deben tener la capacidad de iniciar sesión en sus cuentas utilizando su correo y contraseña.  
**RF3. Búsqueda de Profesionales:** Los usuarios deben tener la posibilidad de buscar profesionales según categorías, ubicación, calificaciones y otros criterios relevantes.  
**RF4. Carrito de Compras y Pago Integrado:** Los usuarios deben poder agregar servicios al carrito de compras y realizar pagos seguros en línea para reservar citas o adquirir servicios.  
**RF5. Sistema de Reserva de Citas:** Los usuarios deben poder programar citas con profesionales según la disponibilidad de estos, recibiendo confirmaciones por correo electrónico o mensajes de texto.  
**RF6. Gestión de Citas:** Los usuarios y profesionales deben poder ver y administrar sus citas programadas, con la opción de cancelar o reprogramar citas cuando sea necesario.  
**RF7. Videoconferencias:** La plataforma debe incluir una función de videoconferencia integrada para las asesorías programadas, permitiendo que usuarios y profesionales se conecten en el horario acordado.  
**RF8. Chat en Tiempo Real:** Debe existir la capacidad de comunicación en tiempo real a través de chat para que los usuarios y profesionales puedan interactuar antes y después de programar una cita, con notificaciones para mensajes nuevos.  

**RF9. Calificaciones y Reseñas:** Los usuarios deben poder calificar y dejar reseñas sobre los profesionales y los servicios ofrecidos, permitiendo que los profesionales respondan a estas reseñas.

**RF10. Sistema de Notificaciones:** Los usuarios deben recibir notificaciones sobre citas programadas, mensajes nuevos y otros eventos relevantes dentro de la plataforma.
