/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
( function( window , document , undefined) {

  module('Awesome', {
    setup: function() {
      this.plugin = window.Awesome;
    }
  });

  test('is declared as function', 1, function() {
    // Not a bad test to run on collection methods.
    strictEqual(typeof this.plugin, 'function' , 'should be a function');
  });

}( window , window.document ) );
