# stl2json

Convert binary|ascii stl data into json on the command line

## install

`npm install -g stl2json`

## usage

### process stdin by default

```cat file | stl2json```

```
$ cat ~/Downloads/ISO_SHAFT_CLAMP.stl | stl2json
{"normal":[0.9948693513870239,9.842677430607844e-16,0.10116831958293915],"verts":[[3.261598825454712,-4.953000068664551,0.6597403287887573] ...
```

### read from file 

```stl2json <file>```

```
$ stl2json /Users/tmpvar/Downloads/ISO_SHAFT_CLAMP.stl
{"normal":[0.9948693513870239,9.842677430607844e-16,0.10116831958293915],"verts":[[3.261598825454712,-4.953000068664551,0.6597403287887573] ...
```

### flatten

```stl2json -f```

If you are only interested in vertex data, this is the flag for you.

```
$ cat ~/Downloads/ISO_SHAFT_CLAMP.stl | stl2json -f
[3.261598825454712,-4.953000068664551,0.6597403287887573,3.261598825454712,-4.055254936218262,0.6597403287887573,3.251199960708618,
```

### license

MIT (see: [license.txt](blob/master/license.txt))
