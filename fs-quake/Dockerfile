FROM mhart/alpine-node:11

CMD mkdir /app
WORKDIR /ap

COPY app.js .
COPY package.json .
COPY package-lock.json .

RUN npm install

CMD ["node", "app.js"]