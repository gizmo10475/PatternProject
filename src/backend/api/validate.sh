#!/usr/bin/env bash

function cmd-phpcs
{
    .bin/phpcs . | tee validation-out/phpcs
}

function cmd-phpmd
{
    .bin/phpmd . text .phpmd.xml | tee validation-out/phpmd
}

function cmd-phpunit
{
    mv .env .env.bak
    mv .env.testing .env
    XDEBUG_MODE=coverage .bin/phpunit --configuration phpunit.xml | tee validation-out/phpunit
    mv .env .env.testing
    mv .env.bak .env
}

function main
{
    while (( $# )) ; do 
        case $1 in
            "phpcs" | "phpmd" | "phpunit")
                cmd-"$1"
                exit 0
            ;;
        esac
        shift
    done
    cmd-phpcs
    cmd-phpmd
    exit 0
}

main "$@"
