FROM alpine
MAINTAINER IBM Hybrid Cloud CoC Team

CMD mkdir /app
WORKDIR /app
COPY karma.sh .

RUN apk add curl bash nano \
&& chmod +x karma.sh 

CMD ["/bin/bash", "-c", "./karma.sh"]

