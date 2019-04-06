FROM node:8.11.3

RUN npm install -g npm@6.4.1
RUN npm install -g pm2
RUN npm install -g typescript
RUN pm2 install typescript

WORKDIR /home/node/app

COPY . .