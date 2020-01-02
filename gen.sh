GRPC_WEB_PLUGIN_PATH=/usr/local/bin/protoc-gen-grpc-web
DIST_DIR=./src/proto
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"

mkdir ./src/proto

wget https://raw.githubusercontent.com/KoyamaSohei/special-seminar-api/master/proto/api.proto
mv api.proto ./src/proto

protoc -I=${DIST_DIR} api.proto \
--js_out=import_style=commonjs,binary:${DIST_DIR} \
--grpc-web_out=import_style=typescript,mode=grpcwebtext:${DIST_DIR}