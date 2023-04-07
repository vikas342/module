FROM node:latest

WORKDIR /app


COPY . /app/

RUN npm install


EXPOSE 8800

CMD npm run dev -- --host --port 8800