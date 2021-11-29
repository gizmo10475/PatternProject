USE pattern; -- database name subject to change

DROP TABLE IF EXISTS travel_log;
DROP TABLE IF EXISTS bike2city;
DROP TABLE IF EXISTS bike2station;
DROP TABLE IF EXISTS bikes;

DROP TABLE IF EXISTS station2city;
DROP TABLE IF EXISTS stations;
DROP TABLE IF EXISTS cities;

DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS administrators;

CREATE TABLE bikes (
    `id` INT AUTO_INCREMENT NOT NULL,
    `longitude` FLOAT,
    `latitude` FLOAT,
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
    `longitude` FLOAT,
    `latitude` FLOAT,

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

CREATE TABLE administrators (
    `id` INT AUTO_INCREMENT NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `api_key` VARCHAR(100),

    PRIMARY KEY (`id`)
)
ENGINE INNODB
;

CREATE TABLE customers (
    `id` INT AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `credits` FLOAT DEFAULT 0 NOT NULL,
    `api_key` VARCHAR(100),

    PRIMARY KEY (`id`)
)
ENGINE INNODB
;

CREATE TABLE travel_log (
    `id` INT AUTO_INCREMENT NOT NULL,
    `customer` INT NOT NULL,
    `bike` INT NOT NULL,
    `start_longitude` FLOAT NOT NULL,
    `start_latitude` FLOAT NOT NULL,
    `start_time` TIMESTAMP NOT NULL,
    `end_longitude` FLOAT NOT NULL,
    `end_latitude` FLOAT NOT NULL,
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