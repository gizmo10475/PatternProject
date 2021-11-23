FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=pattern_bike_r

WORKDIR /docker-entrypoint-initdb.d

COPY setup.sql .
COPY tables.sql .

EXPOSE 3306
