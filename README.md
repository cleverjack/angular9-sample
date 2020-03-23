# ModTools

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.

## Contributing Guidelines

See [CONTRIBUTING.md](CONTRIBUTING.md) for information on contributing to our projects.

### Quick Start

Targets NodeJS `10.2.4` or newer.

Install the dependencies and devDependencies with `npm install`

### Documents

We have done

1. Fixed `Client SDK` and built it as a library, you can find it on `projects/classify-text-swagger-client/dist`.

2. Set up `apiBaseUrl` for Client SDK. You can control it on `environments/environment.ts` for dev env or `environments/environment.prod.ts` for production env.

3. We are using LESS and say no with bootstrap or any CSS library / framework.

3. All of usser stories.

4. Feature `Deeper Analysis`.

5. UI & basic logic for `Regression tests popup` (which popup will shown when we click to escalate button).

6. We do not use any UI Framework for this contest, we build it all manually to show our skills and ensure a lightweight project.

### Notes

1. [`Detail Tokens`] I'm not sure about the risk-level which show on the left of each considered tokens. The design file have not unclear this one, so I'm showing the general-risk for that

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
