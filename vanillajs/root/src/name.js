/*
 * {%= name %}
 * {%= homepage %}
 *
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */

 window.Awesome = ( function( window , document , undefined ) {

  "use strict";

  // Declare Variables
  var _settings = {

        doStuff : true

      },
      _awesome =  function(){
         // do awesome stuff (constructor function)
      };

  // Private Methods

  function _Init( settings ) {

      // ...do stuff / access private variables

  }

  // Setup Public Interface

  _awesome.prototype.init = function( settings ) {

     // call private method
     _Init.call( this , settings );

  }

  return _awesome;

 } ( window , window.document ));