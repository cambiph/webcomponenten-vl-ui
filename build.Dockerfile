ARG bamboo_docker_registry
FROM ${bamboo_docker_registry}/node:10

COPY ${HOME:-.}/.npmrc /root/.npmrc
COPY ./package.json /app/package.json

WORKDIR /app

RUN npm install

COPY . .

RUN npm run package
