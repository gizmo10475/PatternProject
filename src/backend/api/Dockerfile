FROM php:apache

RUN docker-php-ext-install pdo pdo_mysql
RUN a2enmod rewrite
RUN apt-get update
RUN apt-get -y install git zip unzip
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

WORKDIR /var/www
COPY . .

RUN composer update
RUN composer install

COPY ./public ./html
RUN mv .env.docker .env
RUN chown -R www-data:www-data /var/www
EXPOSE 80
