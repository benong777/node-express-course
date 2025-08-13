const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('./logger');
const peopleRouter = require('./routes/people');
const cookieRouter = require('./routes/cookie');

const app = express();

//-- Static assets
app.use([logger]);
//-- Parse FORM data
app.use(express.urlencoded({ extended: false }));
//-- Parse JSON
app.use(express.json());
//-- Cookie Parser
app.use(cookieParser());

app.use('/', cookieRouter);
app.use('/api/v1/people', peopleRouter);    // This must be after the express.json()

app.get('/', (req, res) => {
    res.send('Home Page');
})

app.listen(3000, () => {
    console.log('Listening on port 3000...');
})