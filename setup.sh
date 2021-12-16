#!/usr/bin/env bash

cd src/backend/api || exit
composer install
mkdir .bin validation-out
ln -s "$(pwd)/vendor/bin/phpcs" .bin
ln -s "$(pwd)/vendor/bin/phpmd" .bin
ln -s "$(pwd)/vendor/bin/phpunit" .bin
touch .env .env.docker
