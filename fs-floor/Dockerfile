FROM mhart/alpine-node:11

RUN addgroup -S appusers && adduser -S appuser -G appusers
USER appuser

CMD mkdir /app
WORKDIR /app

COPY --chown=appuser:appusers app.js .
COPY --chown=appuser:appusers package.json .
COPY --chown=appuser:appusers package-lock.json .

USER root
RUN chmod -R 777 /app 
RUN npm install
RUN chmod -R 777 /app 

USER appuser
CMD ["node", "app.js"]

