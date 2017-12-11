'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'glimmer-env-hack',
    environment
  };

  if(environment === 'development') {
    ENV.helloWorld = 'Hello world on development repo';
  }

  return ENV;

};
