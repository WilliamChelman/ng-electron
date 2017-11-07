# Ng-Electron

[![Greenkeeper badge](https://badges.greenkeeper.io/WilliamChelman/ng-electron.svg)](https://greenkeeper.io/)
This project aims to be a seed to start a new project using Electron and Angular. 
It brings a good separation between the different modules by using Yarn workspaces.

## Getting Started
Just git clone this project

### Prerequisites
You will need Yarn as this seed heavily rest on Yarn's workspaces.

## Adaptations to the Angular app
Everything worked smoothly after generating the app-renderer package with @angular/cli 1.5.0 but some adaptation needs to be done
* Adding `--base-href .` to the build script. Fix issue with relative path int the Angular app
* Using `--aot` with `ng serve`. Without AoT, there seem to be some issue with interaction between Angular and the bundled Chromium of Electron.
* Adding `Window` type definition in `packages/app-renderer/src/typings.d.ts` so that we can use `const remote = window.require("electron")`
  * Using `import {remote} from "electron"` or `const remote = require("electron").remote` throws error on compilation because of the default webpack config coming with @angular/cli, so we have to be creative.
* For consistency across the different packages, a parent `tsconfig.json` file is used at the root of the app which is extended in every packages.

## Known issues
* Watch is not working for the app-main package.
* Investigate use of Lerna to simplify npm scripts and lifecycle.
* Adding dependencies in `app-common` results in build error for electron.
