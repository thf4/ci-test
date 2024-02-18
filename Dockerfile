FROM node:alpine

COPY package*.json ./

EXPOSE 3000

CMD [ "npm", "start" ]