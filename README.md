# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

### Front-end
Tweeter is single-page app (SPA) that emmulates Twitter. With the help of the [jQuery](https://jquery.com/) library, the HTML code for new tweets are created dynamically in the front-end javascript code. The various animations on screen (error messages, slidding animations, show/hide annimations, etc) are acheived using CSS and jQuery.

This project utilises the [Node Sass middleware](https://www.npmjs.com/package/node-sass-middleware) module which enables the main CSS stylesheet to be automatically compiled in Express.js based http servers. The styling is written in SCSS files. The styling is split into various 'partial' files allowing a modular approach to styling the html.

### Back-end & Database
The back-end for this project includes [Expressjs](https://expressjs.com/), a node.js framework for the back-end http server and [MogoDB](https://www.mongodb.com/), a noSQL, document-based database management system (DBMS).

### Responsive Design



## Posting a new tweet:

<img src="./sreenshots/ScreenRecording20190615.gif" width="800">


## Getting Started

1. Clone this repository to your local machine.
2. Once the project is cloned, head over to your bash terminal and install the dependencies (listed below) using the following command:
```
npm install <module name>
```
3. Once all the dependencies are installed, type the following command to get the server started:
```
node ./server/index.js
```
4. Finally, go to <http://localhost:8080/> in your web browser to start tweeting!

## Dependencies

These are the modules needed to run Tweeter:

- [node.js](https://nodejs.org)
- [express](https://expressjs.com/)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [MongoDB](https://www.mongodb.com/)




