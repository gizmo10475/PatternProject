FROM node:16

WORKDIR /webclientCustomer

COPY webclientCustomer/package*.json ./

RUN npm install

COPY webclientCustomer/ .

CMD [ "node", "index.js" ]