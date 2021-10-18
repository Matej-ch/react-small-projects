#!/usr/bin/env sh

set -e

npm run build

cd build

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/Matej-ch/react-small-projects.git master:gh-pages

cd -