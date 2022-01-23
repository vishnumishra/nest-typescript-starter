
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Important Points:

* Every time you add a new package to your package.json file or make any changes to it or the .env.docker file, please consider rebuilding the docker image using docker-compose down && docker-compose up --build.

* We are using an NodeJS alpine image in the example above to reduce the overall size of the install image. So, to open the container inside your shell, you can run docker exec -it myapp_backend sh