from node:latest

WORKDIR /usr/src/app

ADD package.json /usr/src/app/package.json

RUN npm i

ADD . /usr/src/app

EXPOSE 8888
