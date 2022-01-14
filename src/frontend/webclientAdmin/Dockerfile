FROM node:16

WORKDIR /webclientAdmin

COPY webclientAdmin/package*.json ./

RUN npm install

COPY webclientAdmin/ .

CMD [ "node", "index.js" ]
