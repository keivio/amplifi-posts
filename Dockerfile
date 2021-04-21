FROM node:lts-alpine as build

LABEL Keivio Oliveira

# make the 'src' folder the current working directory
WORKDIR /src

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory
COPY . .

# build app for production with minification
RUN npm run qa-server

FROM nginx
EXPOSE 8090

COPY nginx.conf /etc/nginx/nginx.conf

RUN chown -R nginx:nginx /var/cache/nginx && \
        chown -R nginx:nginx /var/log/nginx && \
        chown -R nginx:nginx /etc/nginx/conf.d
RUN touch /var/run/nginx.pid && \
        chown -R nginx:nginx /var/run/nginx.pid

USER nginx

## Copy build app to static directory in NGINX image
COPY --from=build /src/dist/QA /usr/share/nginx/html