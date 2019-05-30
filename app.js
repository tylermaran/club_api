const express = require('express');
const app = express();
// require package logging - morgan - used for image uploads
// const morgan = require('morgan');
// require bodyparser - allows us to use req.body.whatever
const bodyParser = require('body-parser');
// setup mongoose - will run the MongoDB client as well as schemas and validation
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

// Requiring CORS package and allowing localhost:4000 to access - will update to www.clubfinder.com
const cors = require('cors');

var corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
}

app.use(cors(corsOptions));

// importing routes - add a new const for each of our routes
const clubRoutes = require('./api/routes/clubs');
const userRoutes = require('./api/routes/users');
const surveyRoutes = require('./api/routes/survey');
const imageRoutes = require('./api/routes/images');

// connect to mongoose and you need to pass a path
// You also need to change out the password here for your database password
// to do this properly, create a process.env file
// url... + process.env.MONGO_PASSWORD + ...url

mongoose.connect('mongodb+srv://tylermaran:' + process.env.MONGO_PW + '@cluster0-h5doz.mongodb.net/test?retryWrites=true', {
    useNewUrlParser: true
});

mongoose.set('useFindAndModify', false)

// running morgan in dev mode
// app.use(morgan('dev'));

// making a folder publically available
// app.use('/uploads', express.static('uploads'));

// running bodyparser - apparently no longer necessary in newer version of Express
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// use, as a method, sets up a middleware
// an incoming request has to go through app.use and to whatever we pass to it
app.use('/clubs', clubRoutes);
app.use('/users', userRoutes);
app.use('/survey', surveyRoutes);
app.use('/images', imageRoutes);
app.use('/', (req, res, next) => {
    res.status(200).json({
        message: 'Welcome to ClubFinder API!'
    })
})

// Error handling: if you reach this line, it is because the request did not meet any of the 
// previous routes (/products, /orders, etc.)
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    // using the next message to forward the error
    next(error);
});

// This will be our error handing middleware. This allows us to throw errors from anywhere in the app
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;