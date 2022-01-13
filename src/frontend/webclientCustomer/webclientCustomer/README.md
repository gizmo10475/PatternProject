# Webclient for customers

This is a website made as part of a project for the course DV1610 at Blekinge Tekniska Högskola.
The purpose of the project is to make a system for bike rental. There are three applications that
make up the frontend of the project, and this website is one part of that. There is also a
[webclient for admin](https://github.com/gizmo10475/PatternProject/tree/main/src/frontend/webclientAdmin/webclientAdmin) 
and an [app for customers](https://github.com/gizmo10475/PatternProject/tree/main/src/frontend/app). 
This website is made for customers.

On this website you have to log in with your GitHub account. Once you have logged in you can
view a list of your ride history with details of each ride. There is also a possibility to add
money to your account.

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
* [OAuth](https://oauth.net/2/) - Used for login