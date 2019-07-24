# React Boston

Repository for every year of the [React Boston site](https://reactboston.com/)

**Build**

Each year subdirectory contains an `package.json` with commands for building that subdirectory. You can build all the sites at once, or build a specific year with the build script (from the root of this repo). These all output built versions of the site to the `build` directory in the root.

```sh
## With no arguments, the script builds the 'current' site (2019 at the moment)
./build.sh

## Specify a year as an argument to run the build for that year's site
./build.sh --2019

## Or, run the build for all years
./build.sh --all
```

**Deploy**

We deploy the build directory by pushing it as a "subtree" to the `gh-pages` branch. Make sure to run the build process first and commit/push the changes.

```sh
./deploy.sh
```

**Develop**

To work on the 2019 site:

```sh
cd 2019
npm install
npm run develop
```
