FROM node:9

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app
RUN node ./server/seed.js seed


EXPOSE 8080

CMD [ "npm", "start" ]