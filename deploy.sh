#/bin/bash
set -euo pipefail

git subtree push -f --prefix build origin gh-pages
