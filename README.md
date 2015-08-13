# Maxwell Workflow

> This is a workflow for personal and professional web development projects, 
> with standard components included and set up to include other ones as needed. 
> It has no content set up with it and is a blank slate.

## System and User Requirements

- Node.js
- Gulp
- Terminal
- Understanding of JS, Sass, Jade, and basic front-end workflow

## Workflow Dependencies and common commands:

- [Node.JS] - For running the serv-erside javascript
- [Gulp] - For organizing and creating the specific workflow
```sh
$ gulp   //run + watch scripts, sass, jade, images for changes
$ gulp watch   //Watch the above without running them
$ gulp scripts   //only process JS files
$ gulp sass   //only process Sass files to CSS
$ gulp jade   //only process Jade files to HTML
$ gulp images   //optimize image files
$ gulp sassdoc   //Create documentation for Sass code, is not watched
$ gulp uncss   //Removes any CSS not being used in the project, is not watched
$ gulp jshint   //Checks the main JS files for errors
$ gulp scss-lint   //Checks the main Sass files for errors and proper styling
$ ^C   //stop run + watch
```
- [NPM] - Node package management
```sh
$ npm install   //install dependencies (deps)
$ npm install [component] --save-dev  //Install + save deps
$ npm uninstall [component]   //Remove a dep
$ npm search [component]   //Search Github for new deps
```
- [Bower] - Component package management
```sh
$ bower install   //Install all Bower components from Bower.json
$ bower install [component] --save-dev   //Install a single Bower component
$ bower install [component] --save-dev   //Install a single Bower component and save it to Bower.json (if not already there)
$ bower uninstall [component]   //Uninstall a component from the workflow and Bower components list
$ bower search [component]   //Search for new Bower components to install
```

## Organization:

- Bower.json: Bower file that organizes and saves Bower dependencies. Can be seen and manually removed here. When installed, are saved to the components folder.
- Build: Where the project output is. Jade files are processed and output here at HTML files, and the CSS, JS, and image files are minified/optimized before going to the Assets folder for local reference.
- Components: Bower files and dependencies are all saved here. Any relevant CSS or JS files can be referenced here without weighing down the Build folder.
- Gulpfile.js: Code that controls the basic Gulp workflow and preprocessing of all files. Outputs files to the Build folders and notifies of the processes or the errors.
- JS: All Javascript and jQuery files are placed. Are processed, minified, and output to the Build’s Assets folder.
- Jade: All Jade files are written here, and are then processed and output into the Build folder. Also where image files are placed, which are optimized for Build as well.
- Node_modules: All node dependencies, essential to running the Gulp workflow. Is empty at first, see NPM above for how to install dependencies.
- NPM-debug.log: Debug log of all NPM mistakes and entries with the NPM dependency manager.
- Package.json: List of all NPM dependencies that will be installed, essential to quickly setting up the Gulp workflow.
- Public: All public documentation for the project, such as the SASS documentation.
- Sass: All sass files are gathered and compiled here. And Sass partials must be accurately referenced in the main style.css file.

## Module Dependencies:

- express: A web application framework that currently just puts the site on localhost:3000 while gulp is running
- gulp: Basic Gulp module for running the workflow
- gulp-autoprefixer: Automatically adds browser prefixes to certain CSS styles to ensure cross-compatibility
- gulp-bower: Allows use of Bower in the Gulp workflow if needed
- gulp-concat: For merging different JS files together from the JS folder into a single one for the Assets folder
- gulp-imagemin: For optimizing images in the images placed in the Jade/Img folder and sent to Build
- gulp-jade: For converting Jade files to HTML
- gulp-livereload: For using the Chrome LiveReload extension so pages refresh automatically with changes
- gulp-minify-css: Minifying CSS files
- gulp-notify: Notifying of completed processes or errors
- gulp-plumber: So any mistakes send a message without halting the workflow
- gulp-rename: Renaming any files before sending them to the Build folder
- gulp-sass: For converting Sass to CSS
- gulp-sourcemaps: Adding sourcemaps to CSS and JS files to speed up debugging
- gulp-uglify: For compressing JS files
- sassdoc: For automated documentation of Sass functions, mixins, variables, etc
- gulp-uncss: Removes any CSS element selectors that aren't being used in the Build folder
- gulp-scss-lint: Runs through all the main Sass files to errors and proper markup
- gulp-jshint: Runs through all the main JS files to point out errors
- jshint-stylish: Pairs with gulp-jshint to report any JS errors found

> NOTE: These are not downloaded, but are only already part of Package.json. They need the NPM command to install all dependencies and use them in the workflow.

## Bower Dependencies
- [Bourbon]: A lightweight Sass mixin library
- [Neat]: Lightweight, semantic grid that pairs with Bourbon
- [Bitters]: Scaffold styles, variables and structure for Bourbon and Neat projects.

> NOTE: Similar to the NPM dependencies, these are not downloaded, but are only already part of Bower.json. They need the Bower command to install and use in the workflow. Paths to reference them are already in the main Style.css file

## How to use:

1. Download the workflow and place files in accessible location.
2. Execute commands to install NPM dependencies and Bower components (second optional).
3. Locate folder in terminal with the CD command.
4. Execute Gulp command to run all or one of the processes.
5. If Gulp is watching the files, then any changes made to the Sass, JS, Jade or images will happen automatically on any save.
6. All changes made will be output in the Build folder.
7. Serve and enjoy.

[Bourbon]:http://bourbon.io/
[Neat]:http://neat.bourbon.io/
[Bitters]:http://bitters.bourbon.io/
[Bower]:http://bower.io/
[NPM]:https://www.npmjs.com/
[Node.JS]:https://nodejs.org/
[Gulp]:http://gulpjs.com/