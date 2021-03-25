// ./app.js

const express = require('express');
const morgan = require('morgan');
const routes = require ('./routes');

const app = express();

app.use(morgan('dev'));

app.set('view engine', 'pug');

app.use(routes);

// Catch unhandled requests and forward to error handler.
app.use((req, res, next) => {
    const err = new Error('The requested page couln\'t be found.');
    err.status = 404;
    next(err);
})
// Error handler to log errors.
app.use((err, req, res, next) => {
    if (process.env.NODE_ENV === 'production') {
        // TODO Lof the error to the database
    } else {
        console.error(err);
    }
    next(err);
});

// Error handler for 404 errors.
app.use((err, req, res, next) => {
    if (err.status === 404) {
        res.status(404);
        res.render('page-not-found', {
            title: 'Page Not Found',
        });
    } else {
        next(err);
    }
});

// Define a port and start listening for connections.

module.exports = app;
