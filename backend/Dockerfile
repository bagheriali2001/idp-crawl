FROM node:18.14.2
RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn install
COPY . .
EXPOSE 3416
ENV TZ=Asia/Tehran
CMD [ "yarn", "start" ]