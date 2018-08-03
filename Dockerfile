FROM node:10.8

ADD . /user-guide

WORKDIR /user-guide/website

RUN yarn
RUN yarn build

RUN yarn global add serve

# Serve just the static files (uses now.json for config)
CMD serve
