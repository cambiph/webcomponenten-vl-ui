FROM http://artifactory-pr-build.lb.cumuli.be:8081/artifactory/api/npm/acd-npm/node:10

COPY ${HOME:-.}/.npmrc /root/.npmrc
COPY ./package.json /app/package.json

WORKDIR /app

RUN npm install

COPY . .

ENTRYPOINT [ "npm", "run", "package"]
