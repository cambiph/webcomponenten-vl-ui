ARG bamboo_docker_registry
FROM ${bamboo_docker_registry}/node:10

ARG VERSION

COPY ${HOME:-.}/.npmrc /root/.npmrc
COPY ${HOME:-.}/.gitconfig /root/.gitconfig
COPY ${HOME:-.}/.git-credentials /root/.git-credentials

COPY ./package.json /app/package.json

WORKDIR /app

RUN npm install

COPY . .

RUN npm run release:testless -- $VERSION
