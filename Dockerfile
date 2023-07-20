# Usamos la imagen de node como base para el contenedor
#FROM node:14.21.3 as build

# Establecemos el directorio de trabajo dentro del contenedor
#WORKDIR /app

# Copiamos los archivos de package.json y package-lock.json (o yarn.lock) para aprovechar la caché de las dependencias
#COPY package*.json ./

# Instalamos las dependencias del proyecto
#RUN npm install

# Instalamos el Angular CLI de forma global en la imagen
#RUN npm install -g @angular/cli@14.2.12

# Copiamos el código fuente del proyecto dentro del contenedor
#COPY . .

# Construimos la aplicación de Angular en modo producción (modo de producción habilitado de forma predeterminada)
#RUN ng build

# Etapa de producción (Usamos un servidor Nginx para servir la aplicación construida)
#FROM nginx:alpine

# Copiamos los archivos construidos de Angular al directorio de trabajo de Nginx
#COPY --from=build /app/dist/suntcode-app /usr/share/nginx/html

# Exponemos el puerto 80 del contenedor
#EXPOSE 80

# Comando para iniciar el servidor Nginx
# CMD ["nginx", "-g", "daemon off;"]
# CMD ["npx", "start"]
# CMD ["npx", "serve"]

# Etapa de desarrollo
FROM node:14.21.3 as development

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli@14.2.12

COPY . .

EXPOSE 4200

#CMD ["npm", "start"]
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
