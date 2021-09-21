# [参考] https://vuejs.org/v2/cookbook/dockerize-vuejs-app.html

FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# RUN npm run build

EXPOSE 8080
CMD [ "npm", "run", "serve" ]
