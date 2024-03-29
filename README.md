# Enroute


## Prerequisites
In order to use this repository, you will need to have the following setup on your computer.

![node:v0.9.0](https://img.shields.io/badge/node-v0.9.0-blue.svg)
![npm:v8.15.0](https://img.shields.io/badge/npm-v8.15.0-blueviolet.svg)
![ruby:2.7.4](https://img.shields.io/badge/ruby-2.7.4-yellow.svg)

*  `node v0.9.0+`
* `npm 8.15.0+`
* `python 3.9.0+`
 
 
## Setup Instructions

This section will guide you through setting up and running this repository on your local machine.

### Project

* Clone the repository
    ``` 
    git clone https://github.com/Calebbii/enroute.git
    ```
* Navigate to the project folder
    ```
    cd enroute 
    ```
* To interact with the front-end part of the application, navigate to the `webapp` folder
    ```
    cd webapp
    ```
* To interact with the back-end part of the application, navigate to the `api` folder
    ```
    cd api
    ``` 

### Environment Variables
To use the environment variables, create three environment files: `.env`, `.env.development` and `.env.production`.

Use the following criteria to set your environment variables:
* `.env` - Common variables that are not specific to any environment.
* `.env.development` - Variables that are only specific to `development` or `test` environments.
* `.env.production` - Variables that are only specific to the production environment. Example: `ENTRY`.

```{shell}
# DOCKER POSTRESQL DATABASE 
DEV_DB_USER='database_username'
DEV_DB_PASSWORD='database_password' 
DEV_DB_NAME='database_name' 

# DOMAIN
CURRENT_SITE_DOMAIN=http://localhost:8080/

# SENTRY
SENTRY_DNS=8.8.8.8

# COMMON_API_CREDS
REACT_APP_API_URL=https://myApiServerUrl.com
```
NB:
* Ensure you use the prefix `REACT_APP_` to store all the variables that are needed in the React Application. Example: `REACT_APP_NAME=janedoe`
* **DO NOT** commit any of the environment files to version control.

### Docker

This application is built with Docker, you will need to have the following installed in order to use it:
* `Makefile` - Use the link below to install https://makefiletutorial.com/.
* `Docker` - https://www.docker.com/.

1. Build Docker container and start service.
    ```
    make docker-build 
    ```
2. Show logs from container processes.
    ```
    make show-logs
    ```
3. Stop container.
    ``` 
    make start 
    ```
4. All client sided routes are rendered from root, `/`. Example `http://localhost:8080/admin` - Admin React Page
5. All API endpoints are rendered from `/api/`. Example `http://localhost:8080/api/admin` - Admin endpoint

**NB: All requests are listening from port `8080`.**

## Technologies Used 
This application has been built with these technologies:
* RSpec `v3.1.2` 
* React `v18.0`
* Typescript `v4.9.5`
* Jest `v29.5.0`
* Firebase `v9.17.0`
* Docker
* GitHub Actions
* GitHub Projects
