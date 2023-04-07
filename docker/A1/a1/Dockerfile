FROM node:latest

WORKDIR /app


COPY . /app/

RUN npm install


EXPOSE 80

CMD npm run dev -- --host --port 80