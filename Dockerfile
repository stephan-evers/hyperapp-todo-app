FROM nginx:alpine
LABEL author="Stephan Evers"
COPY ./dist /var/www
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]
