#!/usr/bin/env bash

###############################################################################

APP="$0"
APP_VER="1.0.0"

###############################################################################

prep() {
    npm install -g gulp gulp-cli
    npm install
}

build() {
    gulp
}

main() {
    local path=$(dirname $(readlink -f $APP))

    pushd "$path" &> /dev/null
        prep
        build
    popd &> /dev/null
}

###############################################################################

main "$@"
