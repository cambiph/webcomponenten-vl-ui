ARG REGISTRY
FROM ${REGISTRY}node:10

COPY ${HOME:-.}/.npmrc /root/.npmrc
COPY ./package.json /app/package.json

WORKDIR /app

RUN npm install

COPY . .

ENTRYPOINT [ "npm", "run", "package"]
