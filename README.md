# Amplifi Posts

> Amplifi Project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test

# Run with docker
# 1. Download and Install Docker Desktop from your platform: https://www.docker.com/products/docker-desktop
# 2. Run the following command and build the container image
npm run docker-up

# 3. Check the image name created
docker ps -a

# 4. Run the container using the generated image override the captilize word where CONTAINER_ALIAS mean an alias for container after running and CONTAINER_IMAGE is the name of your image generated from step 2 and you can check it running step 3.
docker run -p 8080:8090 --name CONTAINER_ALIAS CONTAINER_IMAGE

# 5. Check if container is running correctly
docker ps

# 6. After these steps you can access the application on localhost:8080
```