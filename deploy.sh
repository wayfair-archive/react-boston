#/bin/bash
set -euo pipefail

git checkout master
# create a local gh-pages branch containing the splitted output folder
git subtree split --prefix build -b gh-pages
# force the push of the gh-pages branch to the remote gh-pages branch at origin
git push -f origin gh-pages:gh-pages
# delete the local gh-pages
git branch -D gh-pages
