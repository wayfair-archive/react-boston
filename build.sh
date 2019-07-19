#/bin/bash
set -euo pipefail

build2019() {
  cd 2019
  # npm install
  npm run clean
  npm run build
  cp -rp public/* ../build
  rm -rf public
  cd ..
}

build2018() {
  cd 2018
  # npm install
  npm run build
  cp -rp build/* ../build/2018
  rm -rf build
  cd ..
}

build2017() {
  cd 2017
  # npm install
  npm run build
  cp -rp build/* ../build/2017
  rm -rf build
  cd ..
}

fullBuild() {
  echo "building all sites..."
  rm -rf build
  mkdir -p build/2017 build/2018
  build2017
  build2018
  build2019
  echo "done building all sites!"
}

parse_args() {
  while : ; do
    ## set 2019 by default
    ARG=${1:-"--2019"}
		if [[ $ARG = "-h" || $ARG = "--help" ]]; then
			echo "Pass in the year to build as an argument: i.e './build.sh --2018'"
			return 0
		elif [[ $ARG = "-all" || $ARG = "--all" || $ARG = "-full" || $ARG = "--full" ]]; then
      fullBuild
			shift
		elif [[ $ARG = "-2019" || $ARG = "--2019" ]]; then
			echo "building 2019 site..."
      build2019
      echo "done building 2019 site!"
			shift
    elif [[ $ARG = "-2018" || $ARG = "--2018" ]]; then
      echo "building 2018 site..."
      build2018
      echo "done building 2018 site!"
      shift
    elif [[ $ARG = "-2017" || $ARG = "--2017" ]]; then
      echo "building 2017 site..."
      build2017
      echo "done building 2017 site!"
      shift
		else
			break
		fi
	done
}

parse_args "$@"

echo "www.reactboston.com" > build/CNAME

