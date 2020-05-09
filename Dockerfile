#Nodejs Image Setup

FROM node:12.6.3-alpine3.11

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install

COPY ./app .

EXPOSE 8000

CMD ["node", "server.js"]




#Creating Alpine environment for Nginx
# FROM alpine:3.11.6

# RUN addgroup -S appgroup

# RUN adduser -S omi -G appgroup 

# RUN apk update && apk add bash

# RUN apk add nginx

# RUN mkdir -p /run/nginx

# RUN ["bash"]

#Injecting hardening configuration
# COPY ./config/sysctl.conf /etc/sysctl.conf


#Web server build stage
# FROM nginx:stable

#alpine has commands different from debian/ubuntu
# RUN addgroup -S appgroup && adduser -S omi -G appgroup

# RUN




# Messing with bash within the nginx container
# FROM nginx:stable

# CMD ["bash"]