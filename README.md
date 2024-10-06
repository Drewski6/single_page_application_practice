# Dockerized SPA using Django and Vanilla JS

- This project is a sample of how to create a dockerized single page application (SPA) using django as a backend and vanilla js as the frontend.

### .env
- Need to creat a .env file at the root for configuration.
- Need:
  - SITE_NAME="SPA_backend"
    - Indicate the name of your site/django project name.
  - APP_NAME="api_app"
    - Indicate the name of the app we are making.

### TODO
- [ ] Add app for my spa code and have it render.
- [ ] Have the spa use the api app and render the info
- [ ] Figure out how an api is supposed to be made and secured.
- [ ] EXTRA:
  - [ ] Create a container for a database rather than using the sqlite3 database.
  - [ ] Create a container for a webserver rather than using the django defult server.

### BUGS
- Any time we refresh in the SPA it takes us back to the index. Has to do with routing.
- Any time we refresh in the posts, the css and js does not render. Probably has to do with routing.