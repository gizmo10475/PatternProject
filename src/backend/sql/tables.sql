USE pattern; -- database name subject to change

DROP TABLE IF EXISTS travel_log;
DROP TABLE IF EXISTS bike2city;
DROP TABLE IF EXISTS bike2station;
DROP TABLE IF EXISTS bike2parking_zone;
DROP TABLE IF EXISTS bikes;

DROP TABLE IF EXISTS station2city;
DROP TABLE IF EXISTS stations;
DROP TABLE IF EXISTS parking_zone2city;
DROP TABLE IF EXISTS cities;
DROP TABLE IF EXISTS parking_zones;

DROP TABLE IF EXISTS accounts;
DROP TABLE IF EXISTS customers;

CREATE TABLE bikes (
    `id` INT AUTO_INCREMENT NOT NULL,
    `longitude` DOUBLE,
    `latitude` DOUBLE,
    `active` BOOLEAN DEFAULT 0,
    `speed` INT DEFAULT 0,
    `charging` BOOLEAN DEFAULT 0,
    `warning` BOOLEAN DEFAULT 0,

    PRIMARY KEY (`id`)
)
ENGINE INNODB
;

CREATE TABLE cities (
    `id` INT AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `center_long` DOUBLE,
    `center_lat` DOUBLE,
    `radius` INT,

    PRIMARY KEY (`id`)
)
ENGINE INNODB
;

CREATE TABLE bike2city (
    `id` INT AUTO_INCREMENT NOT NULL,
    `bike` INT NOT NULL,
    `city` INT NOT NULL,

    PRIMARY KEY (`id`),
    FOREIGN KEY (`bike`) REFERENCES bikes (`id`),
    FOREIGN KEY (`city`) REFERENCES cities (`id`)
)
ENGINE INNODB
;

CREATE TABLE stations (
    `id` INT AUTO_INCREMENT NOT NULL,
    `slots` INT NOT NULL,
    `longitude` DOUBLE,
    `latitude` DOUBLE,

    PRIMARY KEY (`id`)
)
ENGINE INNODB
;

CREATE TABLE bike2station (
    `id` INT AUTO_INCREMENT NOT NULL,
    `bike` INT NOT NULL,
    `station` INT NOT NULL,

    PRIMARY KEY (`id`),
    FOREIGN KEY (`bike`) REFERENCES bikes (`id`),
    FOREIGN KEY (`station`) REFERENCES stations (`id`)
)
ENGINE INNODB
;

CREATE TABLE station2city (
    `id` INT AUTO_INCREMENT NOT NULL,
    `station` INT NOT NULL,
    `city` INT NOT NULL,

    PRIMARY KEY (`id`),
    FOREIGN KEY (`station`) REFERENCES stations (`id`),
    FOREIGN KEY (`city`) REFERENCES cities (`id`)
)
ENGINE INNODB
;

CREATE TABLE accounts (
    `id` INT AUTO_INCREMENT NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `admin` BOOLEAN NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
)
ENGINE INNODB
;

CREATE TABLE customers (
    `id` INT AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `account` INT NOT NULL,
    `credits` FLOAT DEFAULT 0 NOT NULL,

    PRIMARY KEY (`id`),
    FOREIGN KEY (`account`) REFERENCES accounts (`id`)
)
ENGINE INNODB
;

CREATE TABLE travel_log (
    `id` INT AUTO_INCREMENT NOT NULL,
    `customer` INT NOT NULL,
    `bike` INT NOT NULL,
    `start_longitude` DOUBLE NOT NULL,
    `start_latitude` DOUBLE NOT NULL,
    `start_time` TIMESTAMP NOT NULL,
    `end_longitude` DOUBLE NOT NULL,
    `end_latitude` DOUBLE NOT NULL,
    `end_time` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `cost` FLOAT NOT NULL,
    `city` INT NOT NULL,

    PRIMARY KEY (`id`),
    FOREIGN KEY (`customer`) REFERENCES customers (`id`),
    FOREIGN KEY (`bike`) REFERENCES bikes (`id`),
    FOREIGN KEY (`city`) REFERENCES cities (`id`)
)
ENGINE INNODB
;

CREATE TABLE personal_access_tokens (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `tokenable_type` VARCHAR(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    `tokenable_id` BIGINT UNSIGNED NOT NULL,
    `name` VARCHAR(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    `token` VARCHAR(64) COLLATE utf8mb4_unicode_ci NOT NULL,
    `abilities` TEXT COLLATE utf8mb4_unicode_ci,
    `last_used_at` TIMESTAMP NULL DEFAULT NULL,
    `created_at` TIMESTAMP NULL DEFAULT NULL,
    `updated_at` TIMESTAMP NULL DEFAULT NULL,

    PRIMARY KEY (`id`),
    UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
    KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
)
ENGINE INNODB
;

CREATE TABLE parking_zones (
    `id` INT NOT NULL AUTO_INCREMENT,
    `center_long` DOUBLE NOT NULL,
    `center_lat` DOUBLE NOT NULL,
    `radius` INT NOT NULL,

    PRIMARY KEY (`id`)
)
ENGINE INNODB
;

CREATE TABLE parking_zone2city (
    `id` INT NOT NULL AUTO_INCREMENT,
    `zone` INT NOT NULL,
    `city` INT NOT NULL,

    PRIMARY KEY (`id`),
    FOREIGN KEY (`zone`) REFERENCES parking_zones (`id`),
    FOREIGN KEY (`city`) REFERENCES cities (`id`)
)
ENGINE INNODB
;

CREATE TABLE bike2parking_zone (
    `id` INT NOT NULL AUTO_INCREMENT,
    `bike` INT NOT NULL,
    `zone` INT NOT NULL,

    PRIMARY KEY (`id`),
    FOREIGN KEY (`bike`) REFERENCES bikes (`id`),
    FOREIGN KEY (`zone`) REFERENCES parking_zones (`id`)
)
ENGINE INNODB
;
