#!/bin/bash

JS_ASSETS=./assets/js
CSS_ASSETS=./assets/css

echo "Copying JS Assets";
mkdir -p $JS_ASSETS && \
rm -rf "${JS_ASSETS}/*" && \
cp ./node_modules/jquery/dist/jquery.min.js $JS_ASSETS;
cp ./node_modules/jquery/dist/jquery.min.map $JS_ASSETS;
cp ./node_modules/motion-ui/dist/motion-ui.min.js $JS_ASSETS;
cp ./node_modules/foundation-sites/dist/foundation.min.js $JS_ASSETS;
cp -r ./client/js/* $JS_ASSETS;

echo "Copying CSS Assets";
mkdir -p $CSS_ASSETS && \
rm -rf "${CSS_ASSETS}/*" && \
cp -r ./assets/fonts $CSS_ASSETS;
