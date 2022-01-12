#! /usr/bin/env bash

set -e

npm run build

cp dist/index.html dist/200.html

npx surge ./dist --domain https://pwa-update-test.surge.sh
