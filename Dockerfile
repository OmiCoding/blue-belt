#Nodejs Image Setup

FROM node:12.16-stretch-slim

RUN apt-get update && apt-get upgrade

RUN apt-get install -y build-essential && apt-get -y install python && apt-get install -y bash

RUN mkdir -p /home/node/app/node_modules

RUN chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY ./app .

RUN yarn install

CMD ["yarn", "server"]

# build-essential
# python

