#!/usr/bin/env bash

cp ${bamboo.npmrc_path} .

docker build \
    --build-arg bamboo_docker_registry \
    --build-arg HTTP_PROXY=${bamboo.http_proxy} \
    --build-arg HTTP_PROXY=${bamboo.http_proxy} \
    -f build.Dockerfile \
    .
