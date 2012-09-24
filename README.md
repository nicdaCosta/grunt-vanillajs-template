# VanillaJS || Grunt Template

A base template for [Grunt build](https://github.com/cowboy/grunt) tool for vanilla JavaScript projects. 

This is based on the defualt [jQuery template](https://github.com/cowboy/grunt/tree/master/tasks/init/jquery) which includes unit tests and various other default tasks along with a simple
pattern/example to get you started. The example that is being used here is similar to those being used on other
popular libraries such as [Modernizr](https://github.com/Modernizr/Modernizr),[Socialite](https://github.com/dbushell/Socialite) and many more. 

## Getting Started
Clone the entire repo and place this in _/grunt/tasks/init/_ on your local pc. For further instructions or more info on the appropriate paths
and working with custom tasks, please see the [Grunt Template Docs](https://github.com/cowboy/grunt/blob/master/docs/task_init.md#creating-custom-templates).
_I hope to add this to NPM soon which will make installing this template much easier._

Once the above has been done, change to a new directory, and type in `grunt init:vanillajs`. Answer the questions. Watch grunt do it's thing. Done. Now you have fully initialized project scaffolding.

If you are new to Grunt, then see below basic guide on installing and setting up Grunt.

### Installing grunt
_This assumes you have [node.js](http://nodejs.org/) and [npm](http://npmjs.org/) installed already._

1. Test that grunt is installed globally by running `grunt --version` at the command-line.
1. If grunt isn't installed globally, run `npm install -g grunt` to install the latest version. _You may need to run `sudo npm install -g grunt`._
1. From the root directory of this project, run `npm install` to install the project's dependencies.

### Installing PhantomJS

In order for the qunit task to work properly, [PhantomJS](http://www.phantomjs.org/) must be installed and in the system PATH (if you can run "phantomjs" at the command line, this task should work).

Unfortunately, PhantomJS cannot be installed automatically via npm or grunt, so you need to install it yourself. There are a number of ways to install PhantomJS.

* [PhantomJS and Mac OS X](http://ariya.ofilabs.com/2012/02/phantomjs-and-mac-os-x.html)
* [PhantomJS Installation](http://code.google.com/p/phantomjs/wiki/Installation) (PhantomJS wiki)

Note that the `phantomjs` executable needs to be in the system `PATH` for grunt to see it.

* [How to set the path and environment variables in Windows](http://www.computerhope.com/issues/ch000549.htm)
* [Where does $PATH get set in OS X 10.6 Snow Leopard?](http://superuser.com/questions/69130/where-does-path-get-set-in-os-x-10-6-snow-leopard)
* [How do I change the PATH variable in Linux](https://www.google.com/search?q=How+do+I+change+the+PATH+variable+in+Linux)

## Release History
_(Nothing yet)_

## License
Copyright (c) 2012 Nic da Costa  
Licensed under the MIT, GPL licenses.
