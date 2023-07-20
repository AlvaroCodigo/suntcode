# Si clonas el proyecto de github

Clona el repositorio en la ubicacion que quieras con el siguiente comando

```git clone https://github.com/AlvaroCodigo/suntcode.git suntcode```
- Tener instalado docker y docker compose

- Tener instalado con nvm node 14.21.3

- Tener instalado con angular  14.2.12

### Ejecutar

```docker-compose build```

```docker-compose up```



--------

# Crear Todo de Cero 

### Crear la estructura del proyecto y los archivos necesarios:

- Utiliza el Angular para crear un nuevo proyecto de Angular. Abre una terminal y ejecuta el siguiente comando:

- Utilizar la version de node 14.21.3
- Utilizar la version de angular 14.2.12

``` ng new my-angular-app ```

```yarn install```

```yarn build```

- Navega al directorio del proyecto recién creado:


``` cd my-angular-app ```

- Asegúrate de que tienes los archivos **Dockerfile** y **docker-compose.yml** en la raíz del proyecto, tal como se mencionó en pasos anteriores.

### Construir la imagen del contenedor:

- Ejecuta el siguiente comando para construir la imagen del contenedor utilizando el **Dockerfile**:

<pre>

contenido de Dockerfile

</pre>


```docker-compose build ```

Esto generará la imagen del contenedor en tu máquina local.

### Ejecutar el contenedor:

- Ahora, inicia el contenedor con el siguiente comando:

<pre>

Contenido de docker-compose

</pre>

```docker-compose up```


Esto ejecutará el contenedor basado en la imagen que construiste previamente. Si tienes mapeado el puerto 4200 en el archivo **docker-compose.yml**, podrás acceder a tu aplicación de Angular en el navegador ingresando la dirección **http://localhost:4200**.

### Desarrollo en tiempo real:

- Como has mapeado los volúmenes en el archivo **docker-compose.yml**, cualquier cambio que realices en el código fuente de tu proyecto Angular en el host se reflejará automáticamente dentro del contenedor sin necesidad de reconstruirlo. Esto te permite realizar desarrollos en tiempo real y ver los cambios instantáneamente en la aplicación mientras el contenedor se está ejecutando.
Detener el contenedor:

Para detener el contenedor, simplemente presiona **Ctrl + C** en la terminal donde se está ejecutando **docker-compose up**.



