@echo off

set VERSION="1.0.0"
set IMAGE_NAME="xapp-json-formatter"

docker build -t openbase/%IMAGE_NAME%:%VERSION% . && docker save -o %IMAGE_NAME%.tar openbase/%IMAGE_NAME%:%VERSION%