"use strict";
const port = process.env.DBWEBB_PORT || 1337;
const path = require("path");
const express = require("express");
const app = express();
const routeIndex = require("./route/index.js");
const routeCustomer = require("./route/customer.js");
const routeAdmin = require("./route/admin.js");
const middleware = require("./middleware/index.js");
const config = require("./config/config.json");


app.set("view engine", "ejs");

app.use(middleware.logIncomingToConsole);
app.use(express.static(path.join(__dirname, "public")));

const clientId = config.clientId;
const clientSecret = config.clientSecret;

app.get('/', (req, res) => {
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${clientId}&scope=user:email`);
});

let token = null;

app.get('/oauth-callback', async (req, res) => {
  const body = {
    client_id: clientId,
    client_secret: clientSecret,
    code: req.query.code
  };
  const fetch = require("node-fetch");
  let response = await fetch(`https://github.com/login/oauth/access_token`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {'Content-Type': 'application/json', "Accept": "application/json"}
  });
  let res_ = await response.json();
  token = res_["access_token"];
  
  response = await fetch("https://api.github.com/user",
  {
    headers: {"Accept": "application/json", "Authorization": `token ${token}`}
  });
  let { login } = await response.json();
  response = await fetch("https://api.github.com/user/emails", {
    headers: {"Accept": "application/json", "Authorization": `token ${token}`}
  });
  let [ email ] = await response.json();
  
  response = await fetch("localhost:8080/api/register", {
    method: "POST",
    body: JSON.stringify({
      "name": login,
      "email": email["email"]
    }),
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  });
  res_ = await response.json();
  const apiKey = res_["data"]["token"];

  res.cookie("apiKey", apiKey);
  res.redirect("/customer/history");
});










app.use("/", routeIndex);
// KUND
app.use("/customer", routeCustomer);
// ADMIN
app.use("/admin", routeAdmin);
app.listen(port, logStartUpDetailsToConsole);

 
 
/**
 * Log app details to console when starting up.
 *
 * @return {void}
 */
function logStartUpDetailsToConsole() {
    let routes = [];
 
    // Find what routes are supported
    app._router.stack.forEach((middleware) => {
        if (middleware.route) {
            // Routes registered directly on the app
            routes.push(middleware.route);
        } else if (middleware.name === "router") {
            // Routes added as router middleware
            middleware.handle.stack.forEach((handler) => {
                let route;
 
                route = handler.route;
                route && routes.push(route);
            });
        }
    });
 
    console.info(`Server is listening on port ${port}.`);
    console.info("Available routes are:");
    console.info(routes);
}