FROM mhart/alpine-node:11

CMD mkdir /ap
WORKDIR /app

COPY app.js .
COPY package.json .
COPY package-lock.json .

RUN npm install
RUN apk add curl

CMD ["node", "app.js"]
