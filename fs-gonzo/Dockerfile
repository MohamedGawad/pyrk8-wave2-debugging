FROM alpine

RUN addgroup -S appusers && adduser -S appuser -G appusers
USER appuser

CMD mkdir /app
WORKDIR /app
COPY --chown=appuser:appusers gonzo.sh .

USER root
RUN chmod -R 777 /app \
&& apk add curl bash \
&& chmod +x gonzo.sh 

USER appuser

