FROM node:17

WORKDIR /home/node/app

ENV NODE_ENV="production"

# Match both package.json and package-lock.json
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]