FROM mhart/alpine-node:11

CMD mkdir /webme
WORKDIR /webme

COPY app.js .
COPY package.json .
COPY package-lock.json .
COPY public ./public

RUN npm install

EXPOSE 4100

CMD ["node", "app.js"]
