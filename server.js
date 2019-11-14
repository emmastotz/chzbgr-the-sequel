// ====================================================
// DEPENDENCIES
// ====================================================
// Express
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// ====================================================
// Handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
// ====================================================
// ROUTES
// ====================================================
require("./controllers/classes_controller.js")(app);
// ====================================================
// LISTEN
// ====================================================
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on: http://localhost:" + PORT);
  });
});
// ====================================================