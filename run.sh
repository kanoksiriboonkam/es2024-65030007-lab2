#!/bin/bash

# Start MongoDB container
docker run -d --name mongodb -v ~/khimlab2_project/mongodb/init.js:/docker-entrypoint-initdb.d/init.js mongo

# Start Express container
docker build -t express ~/express_project/express
docker run -d --name express --link mongodb -p 3000:3000 express

# Start Nginx container
docker run -d --name nginx -p 8080:80 -v ~/khimlab2_project/nginx/nginx.conf:/etc/nginx/nginx.conf -v ~/khimlab2_project/nginx/index.html:/usr/share/nginx/html/index.html nginx
