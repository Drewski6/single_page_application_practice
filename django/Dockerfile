FROM python:3.12

WORKDIR /app

RUN apt-get update && apt-get install -y bash

COPY requirements.txt requirements.txt

RUN pip3 install -r requirements.txt

COPY ./tools/docker-entrypoint.sh .

ENTRYPOINT ["bash", "docker-entrypoint.sh" ]