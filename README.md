# React Boston

Repository for every year of the [React Boston site](https://reactboston.com/)

**Build**

Each year subdirectory contains an `package.json` with commands for building that subdirectory. To build the entire site, with every year, run the build script from the root of the repository:

```
./build.sh # outputs files to "build" directory
```

**Deploy**

We deploy the build directory by pushing it as a "subtree" to the `gh-pages` branch. Make sure to run the build process first and commit the changes.

```
./deploy.sh
```

**Develop**

To work on the 2019 site, open the 2019 subdirectory and run:

```
npm install
npm run develop
```
