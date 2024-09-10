FROM node

COPY ./openapi-books.yaml /app/openapi/openapi-books.yaml

WORKDIR /app
RUN npm init -y
RUN npm install express swagger-ui-express express-openapi-validator yamljs express-openapi

RUN npm install @stoplight/prism-cli

COPY ./server.js /app/server.js

EXPOSE 8080

CMD ["node", "server.js"]
