#/bin/bash
set -euo pipefail

rm -rf build
rm -rf 2017/build/ 2018/build/ 2019/public/
mkdir -p build/2017 build/2018

cd 2017
npm install
npm run build
cp -rp build/* ../build/2017

cd ../2018
npm install
npm run build
cp -rp build/* ../build/2018

cd ../2019
npm install
npm run build
cp -rp public/* ../build
cd ..
