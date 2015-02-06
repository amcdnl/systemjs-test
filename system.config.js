System.config({
  "baseURL": "dist",
  "paths": {
    "*": "*.js",
    "systemjs-test/*": "src/*.js",
    "bower_components/*": "../bower_components/*.js"
  }
});

System.config({
  "meta": {
    "bower_components/angular/angular": {
      "format": "global",
      "exports": "angular"
    },
    "bower_components/angular-mocks/angular-mocks": {
      "deps": [
        "angular"
      ]
    },
    "bower_components/angular-ui-router/release/angular-ui-router": {
      "deps": [
        "angular"
      ]
    },
    "bower_components/ocLazyLoad/dist/ocLazyLoad": {
      "deps": [
        "angular"
      ]
    }
  }
});

System.config({
  "map": {
    "angular": "bower_components/angular/angular",
    "angular-mocks": "bower_components/angular-mocks/angular-mocks",
    "angular-ui-router": "bower_components/angular-ui-router/release/angular-ui-router",
    "css": "bower_components/plugin-css/css",
    "json": "bower_components/plugin-json/json",
    "ocLazyLoad": "bower_components/ocLazyLoad/dist/ocLazyLoad"
  }
});

