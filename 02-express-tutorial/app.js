const express = require('express');
const logger = require('./logger');
const peopleRouter = require('./routes/people');

const app = express();

//-- Static assets
app.use(logger);
//-- Parse FORM data
app.use(express.urlencoded({ extended: false }));
//-- Parse JSON
app.use(express.json());

app.use('/api/v1/people', peopleRouter);    // This must be after the express.json()

app.listen(3000, () => {
    console.log('Listening on port 3000...');
})