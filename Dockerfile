FROM node:18.18.2-alpine3.18

WORKDIR /app

COPY package.json package.json 

RUN npm install

COPY src src 
COPY tsconfig.json tsconfig.json 

CMD npm start


