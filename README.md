# PatternProject

[![Sauce Test Status](https://app.saucelabs.com/buildstatus/oauth-miek1128-9ea9e)](https://app.eu-central-1.saucelabs.com/tests/8a6435e03da84e6990c507366de5fe21#1) [![Build Status](https://app.travis-ci.com/gizmo10475/PatternProject.svg?branch=main)](https://app.travis-ci.com/gizmo10475/PatternProject)

A project for the course DV1610 made by four students at www.bth.se.

Click <a href="https://docs.google.com/document/d/1r74w20ibNlmui2V_FzpKo1HCpB8zwkydMoOsZvXYNeA/edit?usp=sharing">here</a> to read our System Design Specification (in Swedish).

For API documentation, click <a href="https://github.com/gizmo10475/PatternProject/edit/main/src/backend/api/README.md">here.</a>

## Building the system

To build the system you require docker, and docker-compose. You clone the repository, then you need to add the following config files with valid information. The configuration files required are: 

* src/backend/.env.docker

  ```
  DB_CONNECTION=mysql
  DB_HOST=db
  DB_PORT=3306
  DB_DATABASE=pattern
  DB_USERNAME=user
  DB_PASSWORD=password
  ```

  To run out the box you need to fill out a valid password, all other information should already be correct.

* src/frontend/app/js/vars.js

  ```js
  "use strict";
  
  const apiKey = "";
  
  export { apiKey };
  ```

  Here you need to fill out a valid API-key so that the app can communicate with the API.

* src/frontend/webclientAdmin/webclientAdmin/config/config.json

  ```json
  {
      "apiKey": ""
  }
  ```

  Same here, fill out a valid API-key so the interface can communicate with the API.

* src/frontend/webclientCustomer/webclientCustomer/config/config.json

  ```json
  {
      "clientId": "",
      "clientSecret": ""
  }
  ```

  The values you need to fill out here are the client ID, and client secret for a github application. 

After filling these out correctly all you need to do is run 

```
$ docker-compose up
```

and all subsystems should be built and start up correctly. 

The subsystems are available at the following ports:

| Subsystem                | Port |
| ------------------------ | ---- |
| App                      | 8081 |
| API                      | 8080 |
| Customer interface       | 1337 |
| Administration interface | 1336 |
| Database                 | 3306 |

