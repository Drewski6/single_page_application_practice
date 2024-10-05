FROM python:3.12

WORKDIR /app

RUN apt-get update && apt-get install -y bash

COPY requirements.txt requirements.txt

RUN pip3 install -r requirements.txt

COPY ./tools/docker-entrypoint.sh .

RUN mkdir -p /app/django_data

COPY ./django_data /app/django_data

ENTRYPOINT ["bash", "docker-entrypoint.sh" ]

CMD ["python3", "manage.py", "runserver", "0.0.0.0:5000"]