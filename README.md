# MENN - [M]ongodb,[E]xpress.js,[N]ext.js,[N]ginx

Menn is your all-in-one toolchain.Consists of:

- mongodb official docker image: https://hub.docker.com/_/mongo
- dockerized express.js
- dockerized next.js
- nginx official docker image: https://hub.docker.com/_/nginx

With the current toolchain, we are integrating all the required services in order to build a web project from scratch.

All the requests are being handled by "nginx", and the services are connected within their internal networks using docker network.This will gives you a full control over the http requests and apis along with the security of your application.

With the power of "express.js", you are able to build an scalable backend api service in a very simple and straight approach.
By using "Next.js" and "React.js" along with "Tailwindcss", you are capable of creating flexible/beautiful web application without having to worry about "SEO" while benefiting from "SSR" feature on you client-side app.

And finally, "mongodb" will satisfy all your needs for performance, security, and scalability for your data.

### Getting started

This will guid you through setup and run a project using menn.

#### Prerequisites

- nodejs version >= 14
  - [how to install nodejs](https://nodejs.dev/en/learn/how-to-install-nodejs/)
- npm
  ```bash
  npm install npm@latest -g
  ```
- docker
  - [how to install docker](https://docs.docker.com/engine/install/)

#### Setup

1. Clone the repository using
   ```bash
   git clone https://github.com/mohamadtgh/menn-toolchain.git
   ```
2. Go to the project's directory
   ```bash
   cd ./menn-toolchain
   ```
3. Run "setup.sh" using `bash`
   ```bash
   bash setup.sh
   ```
   This will install all the packages and creates the `.env` configuration file.

#### Run

While you are on the root of the project, run

```bash
docker-compose up --build
```

in order to build images and run container on your machine.

After running the container, the app will be accessible through `localhost:3000`.

You can also access to the backend api using `localhost:3000/api/v1`.

##### Example

A simple example is already included in repository.This example is calling `api/v1/status` api from the Nextjs app

#### Configurations

You can configure ports and container names through `.env` file. Here is the list of available configurations:

- `NGINX_HTTP_PORT` to access to the app interface over http. default value is `3000` (`localhost:3000`)
- `NGINX_HTTPS_PORT` to access to the app interface over https. default value is `443`(`localhost:443`)
- `API_HOST` internal host address for express app in container. default is `0.0.0.0` which makes it accessible from internal network
- `API_PORT` accessible port of express app from container.
- `API_CONTAINER_NAME` name of the backend container. this will be used as the identifier over the internal network. default value is `app-back`
- `APP_HOST` internal host address for next.js app in container. default is `0.0.0.0` which makes it accessible from internal network
- `APP_PORT` accessible port of express app from container. default is `0.0.0.0` which makes it accessible from internal network
- `APP_CONTAINER_NAME` name of the web app container. this will be used as the identifier over the internal network. default value is `app-front`
- `MONGODB_DATABASE` mongodb database name. default value is `mydb`
- `MONGODB_USERNAME` username to connect to mongodb. default value is `root`
- `MONGODB_PASSWORD` password to connect to mongodb. default value is `123`
- `MONGODB_PORT` exposed port of mongodb container. default value is `27016`
- `DB_CONTAINER_NAME` name of the backend container. this will be used as the identifier over the internal network. default value is `app-db`

#### Networks

In order to secure containers and to provide access to different containers by their container name, we are using docker shared networks.

There are two networks available. see `networks` section in `docker-compose.yml`.

- api_net
- db_net

app-back, app-front, and app-nginx are connected together through "api_net".
app-back, and app-db are connected through "db_net".

#### Additional feature

There is an implementation for express router and handler inside `./back/express` folder. It is added to simplify and clarify the implementation of routes and handlers in express.js but it is up to you if you wanted to use it or have your own structure ;).

### Roadmap

- [ ] Add production environment and deployment
- [ ] Improve the structure of express.js wrapper for routes and handlers

### Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### License

Distributed under the MIT License. See `LICENSE.txt` for more information.
