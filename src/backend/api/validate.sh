#!/usr/bin/env bash

function cmd-phpcs
{
    .bin/phpcs . | tee validate/phpcs
}

function cmd-phpmd
{
    .bin/phpmd . text .phpmd.xml | tee validate/phpmd
}

function main
{
    while (( $# )) ; do 
        case $1 in
            "phpcs" | "phpmd")
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
