FROM node:9.2.0

RUN npm install -g create-react-app

RUN mkdir /app
RUN mkdir /dependencies

COPY package.json /dependencies

WORKDIR /dependencies

RUN npm install

