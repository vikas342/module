#stage 1: build the  application 

FROM node:latest as build
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY . .
RUN npm run build


#stage 2: run the application


FROM nginx:latest

COPY --from=build /app/dist/ /usr/share/nginx/html