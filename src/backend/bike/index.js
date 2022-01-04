const port = process.env.DBWEBB_PORT || 1338;
const path = require("path");
const express = require("express");
const app = express();
const routeIndex = require("./route/index.js");

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "views")));
app.use("/", routeIndex);
app.listen(port, logStartUpDetailsToConsole);

function logStartUpDetailsToConsole() {
    let routes = [];


    console.info(`Server is listening on port ${port}.`);
    console.info("Available routes are:");
    console.info(routes);
}
