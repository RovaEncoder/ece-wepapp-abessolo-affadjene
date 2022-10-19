const express = require("express");
const app = express();
const db = require("./src/db/db.js");
const port = 3000;

const getArticleById = require("./src/routes/getArticleById")(app);
// app.use("/src/routes/getArticleById", getArticleById);

// app.send(test);
// // require("./src/routes/getAllArticles")(db, app);
app.listen(port, () => console.log("Hello Express !"));
