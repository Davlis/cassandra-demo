FROM node:10

WORKDIR /usr/src/app

COPY src ./src
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json

RUN npm install --production

CMD ["npm", "run", "start"]
