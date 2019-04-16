#
#/bin/bash
set -euo pipefail

./build.sh

git subtree push --prefix build origin gh-pages
