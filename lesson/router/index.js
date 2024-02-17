const express = require("express");
const app = express();
const routes = require("./routes");
const routes = require("./routes/books");
app.use(routes);

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
