# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

Tweeter is hosted on Heroku at: <https://tweeter-fredlavoie.herokuapp.com/>

### Front-end:
Tweeter is single-page app (SPA) that emulates Twitter. With the help of the [jQuery](https://jquery.com/) library, the HTML code for new tweets are created dynamically in the front-end javascript code. The various animations on screen (error messages, slidding animations, show/hide annimations, etc) are acheived using CSS and jQuery. New tweets are created, uploaded to the database and loaded on-screen asynchronously usnig [AJAX](https://en.wikipedia.org/wiki/Ajax_%28programming%29). This prevents the need to reload or refresh the page as the requests are made in the background asynchronously.

This project utilises the [Node Sass middleware](https://www.npmjs.com/package/node-sass-middleware) module which enables the main CSS stylesheet to be automatically compiled in Express.js based http servers. The styling is written in SCSS files. The styling is split into various 'partial' files allowing a modular approach to styling the html.

### Back-end & Database:
The back-end for this project includes [Expressjs](https://expressjs.com/), a node.js framework for the back-end http server and [MogoDB](https://www.mongodb.com/), a noSQL, document-based database management system (DBMS).

### Responsive Design:
Using media queries in CSS, the app removes the hover animations and adapts to the screen size of the user to make the app user-friendly on mobile devices. The Chrome Developer Tools were used to emulate various screen sizes to ensure compatibility. The flag, like and retweet buttons were also enlarged and spaced further apart for smaller screens to make them more accessible.

## Posting a new tweet:

<img src="./screenshots/ScreenRecording2.gif" width="800">

## Dependencies

These are the modules needed to run Tweeter:

- [node.js](https://nodejs.org)
- [express](https://expressjs.com/)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [MongoDB](https://www.mongodb.com/)




