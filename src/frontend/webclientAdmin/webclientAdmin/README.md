# Webclient for admin

This is a website made as part of a project for the course DV1610 at Blekinge Tekniska
Högskola. The purpose of the project is to make a system for bike rental. There are three
applications that make up the frontend of the project, and this website is one part of that.
There is also a [webclient for customers](https://github.com/gizmo10475/PatternProject/tree/main/src/frontend/webclientCustomer/webclientCustomer)
and an [app for customers](https://github.com/gizmo10475/PatternProject/tree/main/src/frontend/app).
This website is made for admin.

On this website you can view all users in the system. It is possible to edit each users user name
and email. Besides being able to manage users this webclient offers admin a map with all the
bikes and charging stations.

## Setup

Run the following command to install the essentials:
```
npm install
```

To start the webclient run the following command:
```
node index.js
```

When this is completed you can find the webclient in your browser on ``localhost:1337``.

## Built with
* [Express](https://expressjs.com) - The framework used

* [Leaflet](https://leafletjs.com) - Open-source JavaScript library used to display the map