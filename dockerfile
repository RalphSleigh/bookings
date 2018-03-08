FROM node:9

ARG BOOKINGS_VAULT_URL

ENV NODE_ENV=production

RUN apk add --no-cache --virtual .gyp \
        python \
        make \
        g++ \
    && npm install \
        [ your npm dependencies here ] \
    && apk del .gyp

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install -dev

COPY . /usr/src/app
#we want to do this, but takes to much ram so for now prebuild and include in the copy
#RUN node ./node_modules/webpack/bin/webpack.js

RUN node ./server/seed.js seed

EXPOSE 8080

CMD [ "npm", "start" ]