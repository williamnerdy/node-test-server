var express = require("express");
var app = express();

app.post("/auth", function(req, res) {
  res.status(200).send({ token: "my-token" });
});

app.post("/recover", function(req, res) {
  res.status(200).send({ success: true });
});

app.delete("/exit", function(req, res) {
  res.sendStatus(200);
});

app.listen(5000, function() {
  console.log("Example app listening on port 5000!");
});
