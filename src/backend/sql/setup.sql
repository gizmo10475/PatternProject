SET NAMES 'utf8';

DROP DATABASE IF EXISTS pattern;

ALTER USER 'root'@'localhost' IDENTIFIED WITH caching_sha2_password BY 'pattern_bike_r';
CREATE DATABASE pattern;

DROP USER IF EXISTS 'user'@'%';
CREATE USER IF NOT EXISTS 'user'@'%' IDENTIFIED BY 'pattern_bike_u';
GRANT ALL PRIVILEGES ON pattern.* TO 'user'@'%';
