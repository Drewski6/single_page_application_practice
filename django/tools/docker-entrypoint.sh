#!/bin/bash

set -ux

echo "Starting django setup"

# check that the project does not exist, if it does not exist, create it
if [ ! -d "./${SITE_NAME}" ]; then
  python3 -m django startproject $SITE_NAME
fi

tail -f /dev/null