#!/usr/bin/env bash

function cmd-phpcs
{
    local output
    output=$(.bin/phpcs .)
    local exitC=$?
    if [ $exitC -ne 0 ] ; then
        echo "PHPCS validation failed"
        exit $exitC
    fi
    echo "$output" | tee validation-out/phpcs
}

function cmd-phpmd
{
    local output
    output=$(.bin/phpmd . text .phpmd.xml)
    local exitC=$?
    if [ $exitC -ne 0 ] ; then
        echo "PHPMD validation failed"
        exit $exitC
    fi
    echo "$output" | tee validation-out/phpmd
}

function cmd-phpunit
{
    XDEBUG_MODE=coverage .bin/phpunit --configuration phpunit.xml | tee validation-out/phpunit
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
    cmd-phpunit
    exit 0
}

main "$@"
