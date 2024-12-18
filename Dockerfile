FROM node:16-slim

COPY . /app

WORKDIR /app

RUN npm install

CMD ["npm","start"]
