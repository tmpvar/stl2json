#!/usr/bin/env node

var stl = require('stl');
var argv = require('optimist').argv;
var through = require('through2');
var path = require('path');
var fs = require('fs');

var parser = stl.createParseStream();
var source = process.stdin;
if (argv._.length) {
  console.log(path.resolve(argv._[0]));
  source = require('fs').createReadStream(
    path.resolve(argv._[0])
  );
}

var first = true;

source
  .pipe(parser)
  .pipe(through.obj(function(obj, enc, fn) {
    if (obj && obj.verts) {
      if (first) {
        this.push('[');
        first = false;
      } else {
        this.push(',');
      }

      // Flatten
      if (argv.f) {
        this.push(obj.verts.map(function(vert) {
          return vert.join(',')
        }).join(','))

      } else {
        this.push(JSON.stringify(obj));
      }
    }
    fn();
  }))
  .pipe(process.stdout);

parser.on('end', function() {
  process.stdout.write(']');
});
