#/bin/bash
set -euo pipefail

build2019() {
  echo "building 2019 site..."
  cd 2019
  npm run clean
  npm run build
  cp -rp public/* ../build
  rm -rf public
  cd ..
  echo "done building 2019 site!"
}

build2018() {
  mkdir -p build/2018
  echo "building 2018 site..."
  cd 2018
  npm run build
  cp -rp build/* ../build/2018
  rm -rf build
  cd ..
  echo "done building 2018 site!"
}

build2017() {
  mkdir -p build/2017
  echo "building 2017 site..."
  cd 2017
  npm run build
  cp -rp build/* ../build/2017
  rm -rf build
  cd ..
  echo "done building 2017 site!"
}

fullBuild() {
  echo "building all sites..."
  rm -rf build
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
      break
		elif [[ $ARG = "-2019" || $ARG = "--2019" ]]; then
      build2019
      break
    elif [[ $ARG = "-2018" || $ARG = "--2018" ]]; then
      build2018
      break
    elif [[ $ARG = "-2017" || $ARG = "--2017" ]]; then
      build2017
      break
		else
			break
		fi
	done
}

parse_args "$@"

echo "www.reactboston.com" > build/CNAME

