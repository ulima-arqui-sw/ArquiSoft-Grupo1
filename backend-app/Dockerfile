# Usa una imagen oficial de Node.js
FROM node:21-bookworm

RUN apt-get update -qq && apt-get install nodejs

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos necesarios (incluyendo package.json)
COPY package*.json ./app

# Copia el resto de los archivos del proyecto
COPY . .

RUN pwd

# Instala las dependencias de la aplicación
RUN npm install

# Exponer el puerto en el que la aplicación se ejecutará
EXPOSE 4447

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
