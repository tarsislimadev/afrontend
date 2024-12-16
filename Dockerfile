FROM node:alpine

WORKDIR /app

COPY . .

CMD node --version
