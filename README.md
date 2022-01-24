
## Description

### Nest Starter APP
    User this a the boilerplate with integrated Docker, Sequelize, MySql, Authentication with JWT.
    This project use docker and [docker-compose](https://docs.docker.com/compose/install) make sure you have install that
## build 

```bash
$ docker-compose up backend --build
```
After Adding the new dependency again build
```bash
$ docker-compose down && docker-compose up --build
```

## Running the app

```bash
# development
$ docker-compose up

```


Important Points:

* Every time you add a new package to your package.json file or make any changes to it or the .env.docker file, please consider rebuilding the docker image using docker-compose down && docker-compose up --build.

* We are using an NodeJS alpine image in the example above to reduce the overall size of the install image. So, to open the container inside your shell, you can run docker exec -it backend sh