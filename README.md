# 17

## Getting Started

`npm install` or `yarn install` to install your dependencies.

`npm start` or `yarn start` to spin up the dev server.

`npm build` to bundle all code inside of `dist/`. The folder will be created for you.

### Tech Stack

The following tech is included in the default options:

*   React
*   webpack
*   webpack-dev-server
*   Sass (.scss)
*   ESLint
*   Redux
*   Atomic Design
*   Mocha

## Technical Details

`npm build` will come with sourcemaps. These are files for mapping js code to module names to make it easier to debug code. The current setting is 'source-map', which is high quality and expensive.

`npm start` will also bundle sourcemaps. webpack-dev-server compiles in memory, so no file output is created. The current setting is 'cheap-module-eval-source-map', which is a lower quality sourcemap than 'source-map', but provides fast rebuild times.
