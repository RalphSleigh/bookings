FROM node:10-alpine

ARG BOOKINGS_VAULT_URL

ENV NODE_ENV=production

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app/

RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.8/main' >> /etc/apk/repositories

RUN apk update

RUN apk --no-cache add --virtual builds-deps build-base python git postgresql-client=10.5-r0
RUN npm install npm install -g npm@latest
RUN npm install

COPY . /usr/src/app
#we want to do this, but takes to much ram so for now prebuild and include in the copy
#RUN node ./node_modules/webpack/bin/webpack.js

#RUN node ./server/seed.js seed

EXPOSE 8080

CMD [ "npm", "start" ]
