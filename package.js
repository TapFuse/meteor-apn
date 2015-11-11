Package.describe({
  name: 'tapfuse:apn',
  version: '1.7.5_1',
  // Brief, one-line summary of the package.
  summary: 'Wrapper for apn node package',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

var C = 'client';
var S = 'server';
var CS = [C, S];

Npm.depends({
  "apn": "1.7.5"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');

  api.addFiles('lib/tapfuse-apn.js', S);
  api.export('APN', S);

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('tapfuse:apn');
  api.addFiles('tests/package-tests.js');
});
