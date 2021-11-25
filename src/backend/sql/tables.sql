USE pattern; -- database name subject to change

DROP TABLE IF EXISTS travel_log;
DROP TABLE IF EXISTS bike2city;
DROP TABLE IF EXISTS bike2station;
DROP TABLE IF EXISTS bikes;

DROP TABLE IF EXISTS station2city;
DROP TABLE IF EXISTS stations;
DROP TABLE IF EXISTS cities;

DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS accounts;

CREATE TABLE bikes (
    `id` INT AUTO_INCREMENT NOT NULL,
    `location` CHAR(20), -- change depending on coordinate format?
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
    `location` CHAR(20) NOT NULL,

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

DROP TABLE IF EXISTS accounts;
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
    `start_location` CHAR(20) NOT NULL,
    `start_time` TIMESTAMP NOT NULL,
    `end_location` CHAR(20) NOT NULL,
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
