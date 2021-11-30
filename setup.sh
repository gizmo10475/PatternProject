#!/usr/bin/env bash

cd src/backend/api || exit
composer install
mkdir .bin
ln -s "$(pwd)/vendor/bin/phpcs" .bin
ln -s "$(pwd)/vendor/bin/phpmd" .bin
touch .env .env.docker
