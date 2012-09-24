/*
 * grunt template
 * https://github.com/cowboy/grunt
 *
 * Copyright (c) 2012 Nic da Costa
 * Licensed under the MIT license.
 */

// Basic template description.
exports.description = 'Create a Vanilla JS plugin, including QUnit unit tests.';

// Template-specific notes to be displayed before question prompts.
exports.notes = '_Project name_ should not contain "js".' +
  '_Project title_ should be a human-readable title.' +
  'For example, a plugin titled "Awesome ' +
  'Namespace" might have the name "awesome-framework".';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  grunt.helper('prompt', {type: 'vanillajs'}, [
    // Prompt for these values.
    grunt.helper('prompt_for', 'name'),
    grunt.helper('prompt_for', 'title', function(value, data, done) {
      // Fix JavaScript capitalization.
      value = value.replace(/javascript/gi, 'JavaScript');
      done(null, value);
    }),
    grunt.helper('prompt_for', 'description', 'The best Vanilla JS plugin ever.'),
    grunt.helper('prompt_for', 'version'),
    grunt.helper('prompt_for', 'repository'),
    grunt.helper('prompt_for', 'homepage'),
    grunt.helper('prompt_for', 'bugs'),
    grunt.helper('prompt_for', 'licenses', 'MIT GPL'),
    grunt.helper('prompt_for', 'author_name'),
    grunt.helper('prompt_for', 'author_email'),
    grunt.helper('prompt_for', 'author_url')
  ], function(err, props) {
    // A few additional properties.
    props.vanillajs = props.name + '.vanillajs.json';
    props.keywords = [];

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Add properly-named license files.
    init.addLicenseFiles(files, props.licenses);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props, {noProcess: 'libs/**'});

    // Generate package.json file, used by npm and grunt.
    init.writePackageJSON('package.json', {
      name: 'vanillaJS-plugin',
      version: '0.0.0-ignored',
      npm_test: 'grunt qunit',
      // TODO: pull from grunt's package.json
      node_version: '>= 0.6.0'
    });

    // Generate js.json file.
    init.writePackageJSON(props.vanillajs,props);

    // All done!
    done();
  });

};
