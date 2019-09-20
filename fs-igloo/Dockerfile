FROM mhart/alpine-node:11

CMD mkdir /app
WORKDIR /app

COPY app.js .
COPY package.json .
COPY package-lock.json .

RUN npm install

EXPOSE 4100

CMD ["node", "app.js"]
