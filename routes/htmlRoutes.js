var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get('/', function (req, res) {
    res.render("landing")
  });

  app.get('/analytics', function (req, res) {
    res.render("analytics")
  });
}
