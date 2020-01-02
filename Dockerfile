FROM node:10-alpine

WORKDIR /app

ADD src ./src
ADD gen.sh ./
ADD global.d.ts ./ 
ADD package.json ./
ADD tsconfig.json ./
RUN chmod a+x ./gen.sh
RUN apk add protoc
RUN apk add protobuf-dev
RUN yarn install
RUN wget https://github.com/grpc/grpc-web/releases/download/1.0.7/protoc-gen-grpc-web-1.0.7-linux-x86_64
RUN mkdir -p /usr/local/bin
RUN mv protoc-gen-grpc-web-1.0.7-linux-x86_64 /usr/local/bin/protoc-gen-grpc-web
RUN chmod a+x /usr/local/bin/protoc-gen-grpc-web
RUN sh ./gen.sh

RUN yarn global add parcel-bundler
RUN yarn build:server
RUN yarn build:client

EXPOSE 8080
CMD node ./public/server.js