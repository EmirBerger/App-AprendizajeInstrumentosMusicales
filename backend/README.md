# Backend

Este es el backend del proyecto, construido con [Laravel](https://laravel.com/) y gestionado con [XAMPP](https://www.apachefriends.org/index.html) para la base de datos MariaDB.

## Requisitos

- [PHP](https://www.php.net/) (compatible con la versión utilizada en Laravel)
- [Composer](https://getcomposer.org/): Para la gestión de dependencias de PHP
- [XAMPP](https://www.apachefriends.org/index.html): Para gestionar MariaDB y el servidor web

## Configuración

### Base de Datos

1. **Configura MariaDB en XAMPP:**

    - Abre XAMPP y asegúrate de que los servicios de **Apache** y **MySQL** estén corriendo.
    - Accede a [phpMyAdmin](http://localhost/phpmyadmin/).

2. **Crea la base de datos:**

    - En phpMyAdmin, crea una nueva base de datos llamada `sistro`.

### Configuración del Archivo `.env`

1. **Copia el archivo de ejemplo:**

    Copia el archivo `.env.example` a un nuevo archivo `.env` en el directorio raíz del proyecto:

    ```bash
    cp .env.example .env
    ```

2. **Edita el archivo `.env`:**

    Abre el archivo `.env` y ajusta las siguientes configuraciones para que coincidan con tu entorno:

    ```env
    APP_NAME=Laravel
    APP_ENV=local
    APP_KEY=base64:YOUR_GENERATED_APP_KEY
    APP_DEBUG=true
    APP_URL=http://localhost

    APP_LOCALE=en
    APP_FALLBACK_LOCALE=en
    APP_FAKER_LOCALE=en_US

    APP_MAINTENANCE_DRIVER=file
    APP_MAINTENANCE_STORE=database

    BCRYPT_ROUNDS=12

    LOG_CHANNEL=stack
    LOG_STACK=single
    LOG_DEPRECATIONS_CHANNEL=null
    LOG_LEVEL=debug

    DB_CONNECTION=mariadb
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=sistro
    DB_USERNAME=root
    DB_PASSWORD=

    SESSION_DRIVER=database
    SESSION_LIFETIME=120
    SESSION_ENCRYPT=false
    SESSION_PATH=/
    SESSION_DOMAIN=null

    BROADCAST_CONNECTION=log
    FILESYSTEM_DISK=public
    QUEUE_CONNECTION=database

    CACHE_STORE=database
    CACHE_PREFIX=

    MEMCACHED_HOST=127.0.0.1

    REDIS_CLIENT=phpredis
    REDIS_HOST=127.0.0.1
    REDIS_PASSWORD=null
    REDIS_PORT=6379

    MAIL_MAILER=log
    MAIL_HOST=127.0.0.1
    MAIL_PORT=2525
    MAIL_USERNAME=null
    MAIL_PASSWORD=null
    MAIL_ENCRYPTION=null
    MAIL_FROM_ADDRESS="hello@example.com"
    MAIL_FROM_NAME="${APP_NAME}"

    AWS_ACCESS_KEY_ID=
    AWS_SECRET_ACCESS_KEY=
    AWS_DEFAULT_REGION=us-east-1
    AWS_BUCKET=
    AWS_USE_PATH_STYLE_ENDPOINT=false

    VITE_APP_NAME="${APP_NAME}"
    ```

    Asegúrate de reemplazar `YOUR_GENERATED_APP_KEY` con una clave generada para tu aplicación Laravel. Puedes generar una clave ejecutando el siguiente comando:

    ```bash
    php artisan key:generate
    ```
### Enlaces y Migraciones

1. **Crea el enlace de almacenamiento:**

    Ejecuta el siguiente comando para crear un enlace simbólico al directorio de almacenamiento:

    ```bash
    php artisan storage:link
    ```

2. **Migra la base de datos:**

    Si tu proyecto tiene migraciones, ejecuta el siguiente comando para crear las tablas en la base de datos:

    ```bash
    php artisan migrate

3. **Carga datos iniciales:**

    Si tu proyecto incluye datos iniciales, como usuarios predeterminados o datos de referencia, asegúrate de ejecutarlos. Puedes hacerlo mediante seeder en Laravel. Ejecuta el siguiente comando:

    ```bash
    php artisan db:seed
    ```

    Asegúrate de que tus archivos de seeder estén correctamente configurados para insertar los datos necesarios en la base de datos. Puedes encontrar estos archivos en el directorio `database/seeders`.

### Inicia el servidor de desarrollo

    Ejecuta el siguiente comando para iniciar el servidor de desarrollo de Laravel:

    ```bash
    php artisan serve
    ```

    El backend estará disponible en `http://localhost:8000`.

## Scripts Disponibles

- `php artisan serve`: Inicia el servidor de desarrollo de Laravel.
- `php artisan migrate`: Ejecuta las migraciones para configurar la base de datos.
- `php artisan storage:link`: Crea un enlace simbólico al directorio de almacenamiento.
- `php artisan db:seed`: Carga datos iniciales en la base de datos