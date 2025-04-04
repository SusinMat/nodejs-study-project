FROM node:22
WORKDIR /app
COPY yarn.lock /app
RUN yarn install
COPY . /app
CMD node src/app.js
EXPOSE 4080