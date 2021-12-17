FROM httpd:2.4.51

RUN apt-get update
RUN apt-get install -y nodejs npm

WORKDIR /usr/local/apache2/htdocs

COPY ./app/index.html .
COPY ./app/style.css .
COPY ./app/js ./js
COPY ./app/package*.json ./
COPY ./app/webpack.dev.config.js .


RUN npm install --include=dev
RUN npm run build
EXPOSE 80