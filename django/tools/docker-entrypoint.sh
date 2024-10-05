#!/bin/bash

set -ux

echo "Starting django setup script"

cd /app/django_data

# Check that the project does not exist, if it does not exist, create it
if [ ! -d "./${SITE_NAME}" ]; then
  echo "Creating new django project"
  python3 -m django startproject $SITE_NAME
  cd $SITE_NAME
  python3 manage.py startapp $APP_NAME
else
  echo "Django project already exists"
fi

cd $SITE_NAME

# Make migrations
python3 manage.py makemigrations
python3 manage.py migrate

echo "Starting django server"

# Return to Dockerfile CMD
exec "$@"