FROM node:9-alpine

ARG BOOKINGS_VAULT_URL

ENV NODE_ENV=production

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app/

RUN apk --no-cache add --virtual builds-deps build-base python git postgresql-client
RUN npm install npm install -g npm@latest
RUN npm install sqlite3
RUN npm install bcrypt
RUN npm install
RUN npm rebuild bcrypt --build-from-source

COPY . /usr/src/app
#we want to do this, but takes to much ram so for now prebuild and include in the copy
#RUN node ./node_modules/webpack/bin/webpack.js

#RUN node ./server/seed.js seed

EXPOSE 8080

CMD [ "npm", "start" ]