var orm = require("../config/orm.js");

var pho = {
  all: function(cb) {
    orm.all("pho", function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
    orm.create("pho", [
      "pho_name", "devoured"
    ], [
      name, false
    ], cb);
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("pho", {
      devoured: true
    }, condition, cb);
  }
};

module.exports = pho;
