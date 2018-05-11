# server

The server is in the 'server' folder and is build in Node with ExpressJS and connects to the MongoDB.

## development

Please make sure that you have the MongoDB installed and running (e.g. from terminal: `C:\Program Files\MongoDB\Server\3.6\bin>mongod` )

To run the server, please navigate to the 'angularjs-blog/server' folder and run with `node app.js`

# client

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.16.0.

## Build & development

Before running, please install all dependencies with `npm install`.

Run `gulp serve` for preview.

Please note that the `gulp build` for building will not work yet, as UGLIFY-JS is detecting ES6 syntax, for which it doesn't have support.

## Testing

Running `gulp test` will run the unit tests with karma.
