FROM mhart/alpine-node:11
#FROM registry.redhat.io/ubi8/ubi

#RUN groupadd -g 999 appuser && useradd -r -u 999 -g appuser appuser
#USER appuser

RUN addgroup -S appusers && adduser -S appuser -G appusers
USER appuser

CMD mkdir /collector
WORKDIR /collector

COPY --chown=appuser:appusers server.js . 
COPY --chown=appuser:appusers teams.json .
COPY --chown=appuser:appusers configInstructor.json .
COPY --chown=appuser:appusers configStudent.json .
COPY --chown=appuser:appusers LICENSE .
COPY --chown=appuser:appusers package.json .
COPY --chown=appuser:appusers package-lock.json .
COPY --chown=appuser:appusers README.md .
COPY --chown=appuser:appusers LICENSE .
COPY --chown=appuser:appusers lib ./lib
COPY --chown=appuser:appusers public ./public
COPY --chown=appuser:appusers language ./language
COPY --chown=appuser:appusers insight ./insight
COPY --chown=appuser:appusers deployment ./deployment

USER root
RUN chmod -R 777 /collector
RUN npm install 
RUN chmod -R 777 /collector

USER appuser

EXPOSE 3000

CMD ["node", "server.js"]
