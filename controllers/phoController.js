var express = require("express");

var router = express.Router();
var pho = require("../models/pho.js");

//=====================index route==================================================
router.get("/", function(req, res) {
  res.redirect("/pho");
});

router.get("/pho", function(req, res) {
  pho.all(function(phoData) {    
    res.render("index", { pho_data: phoData });
  });
});

router.post("/pho/create", function(req, res) {
  pho.create(req.body.pho_name, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

router.put("/pho/:id", function(req, res) {
  pho.update(req.params.id, function(result) {
    console.log(result);
    res.sendStatus(200);
  });
});

module.exports = router;
