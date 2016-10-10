# Angular2PolymerBp

## Boiler Plate app for Angular cli + Vaadin angular2-polymer + Router + Providers(services)

### Getting Started
* npm install -g angular-cli
* git clone 
* npm install
* bower install
* ng serve

### Changes made
* created a main-polymer.ts to wait for web components to load
* modified angular-cli.json to launch main-polymer.ts before main.ts
* modified app.module.ts to bring in angular2-polymer and CUSTOM_ELEMENTS_SCHEMA and NgModule declarations for paper-inpurt and paper-button
* created elements.html to import all webcomponents
* modified index.html to bring in these elements
* used router to route between home and about components (see app.component.ts and app.component.html)
* used an api service (provider) to call a test api

### Original Code From:
* https://vaadin.com/docs/-/part/elements/angular2-polymer/overview.html
* https://github.com/angular/angular-cli
* https://github.com/AngularClass/angular2-webpack-starter


## This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.17.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
