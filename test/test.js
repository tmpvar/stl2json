var stl2json;
if (typeof require !== "undefined") {
  stl2json = require("../stl2json.js");
} else {
  stl2json = window.stl2json;
}

var ok = function(a, msg) { if (!a) throw new Error(msg || "not ok"); };
var eq = function(a, b) { if (a!==b) throw new Error(a + " !== " + b); };

describe('stl2json', function() {
  describe('#', function() {
    it('', function() {
      
    });
  });
});
