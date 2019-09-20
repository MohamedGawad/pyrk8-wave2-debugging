FROM alpine

CMD mkdir /app
WORKDIR /app
COPY house.sh .

RUN apk add curl bash nano \
&& chmod +x house.sh 

CMD ["/bin/bash", "-c", "./house.sh"]