USE pattern; -- database name subject to change

DROP TABLE IF EXISTS bikes;
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

DROP TABLE IF EXISTS cities;
CREATE TABLE cities (
    `id` INT AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(50) NOT NULL

    PRIMARY KEY (`id`)
)
ENGINE INNODB
;

DROP TABLE IF EXISTS bike2city;
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


