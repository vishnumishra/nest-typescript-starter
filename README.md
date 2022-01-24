
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

## APIs available

1. Create Company (without Auth)

    ```
        curl -i -X POST \
        -H "Content-Type:application/json" \
        -d \
        '{
        "name":"Test company",
        "ceo":"vishnu mishra",
        "address":"some address",
        "inceptionDate":"Sun Jan 23 2022 23:20:25"  
        }' \
        'http://localhost:3000/companies'    
    ```
2. Get Auth Token
    ```
    curl -i -X POST \
   -H "Content-Type:application/json" \
   -d \
    '{
    "companyId":"7afed61d-0cbd-4df1-8396-244b3d42f4d3"
    }' \
    'http://localhost:3000/auth'
    ```

3. Create Team (Should have company ID in path) (Use the Auth token from Auth API)
    ```
    curl -i -X POST \
    -H "Content-Type:application/json" \
    -H "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55SWQiOiI3YWZlZDYxZC0wY2JkLTRkZjEtODM5Ni0yNDRiM2Q0MmY0ZDMiLCJjb21wYW55TmFtZSI6InRlc3QgY29tcGFueSIsImlhdCI6MTY0MzAyNTY0OX0.V34sWJZL6p_fI9xRgSvcJ8WwlLVaQvtMOjwO0xsoQh4" \
    -d \
        '{
        "companyId":"7afed61d-0cbd-4df1-8396-244b3d42f4d3",
        "teamleadName":"Awesome Teamlead"
        }' \
        'http://localhost:3000/teams/company/7afed61d-0cbd-4df1-8396-244b3d42f4d3'

     ```

4. GET Company by ID
    ```
        curl -i -X GET \
        -H "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55SWQiOiI3YWZlZDYxZC0wY2JkLTRkZjEtODM5Ni0yNDRiM2Q0MmY0ZDMiLCJjb21wYW55TmFtZSI6InRlc3QgY29tcGFueSIsImlhdCI6MTY0MzAyNTY0OX0.V34sWJZL6p_fI9xRgSvcJ8WwlLVaQvtMOjwO0xsoQh4" \
        'http://localhost:3000/companies/7afed61d-0cbd-4df1-8396-244b3d42f4d3'    

    ```

5. Search company by the name
    ```
        curl -i -X GET \
        -H "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55SWQiOiI3YWZlZDYxZC0wY2JkLTRkZjEtODM5Ni0yNDRiM2Q0MmY0ZDMiLCJjb21wYW55TmFtZSI6InRlc3QgY29tcGFueSIsImlhdCI6MTY0MzAyNTY0OX0.V34sWJZL6p_fI9xRgSvcJ8WwlLVaQvtMOjwO0xsoQh4" \
        'http://localhost:3000/companies?name=test+company'
    ```

6. Get All Teams (Return all teams as an array grouped within company object)

    ```
    curl -i -X GET \
   -H "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55SWQiOiI3YWZlZDYxZC0wY2JkLTRkZjEtODM5Ni0yNDRiM2Q0MmY0ZDMiLCJjb21wYW55TmFtZSI6InRlc3QgY29tcGFueSIsImlhdCI6MTY0MzAyNTY0OX0.V34sWJZL6p_fI9xRgSvcJ8WwlLVaQvtMOjwO0xsoQh4" \
     'http://localhost:3000/companies/7afed61d-0cbd-4df1-8396-244b3d42f4d3/teams'
    ```



Important Points:

* Every time you add a new package to your package.json file or make any changes to it or the .env.docker file, please consider rebuilding the docker image using docker-compose down && docker-compose up --build.

* We are using an NodeJS alpine image in the example above to reduce the overall size of the install image. So, to open the container inside your shell, you can run docker exec -it backend sh