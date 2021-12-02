FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=pattern_bike_r

WORKDIR /docker-entrypoint-initdb.d

COPY setup.sql ./1_setup.sql
COPY tables.sql ./2_tables.sql
COPY inserts.sql ./3_inserts.sql

EXPOSE 3306
