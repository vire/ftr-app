FROM node:8-alpine

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn

COPY . .

RUN yarn lint

ENV NODE_ENV production
RUN yarn build:ts
RUN yarn build:next

CMD ["yarn", "start"]
