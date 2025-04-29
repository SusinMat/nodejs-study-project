FROM node:22
WORKDIR /app
COPY yarn.lock /app
RUN yarn install
COPY . /app
CMD yarn tsc
EXPOSE 4080
EXPOSE 5432