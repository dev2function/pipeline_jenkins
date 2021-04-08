FROM node:13-alpine

WORKDIR /app

RUN npm install --production

COPY . .

EXPOSE 3000

CMD node index.js
