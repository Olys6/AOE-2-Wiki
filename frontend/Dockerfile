FROM node:16-slim as dev

RUN mkdir -p /app

WORKDIR /app

EXPOSE 3000

ENTRYPOINT ["npm", "run", "start"]

FROM dev as prod

COPY ./ /app

RUN npm install --production