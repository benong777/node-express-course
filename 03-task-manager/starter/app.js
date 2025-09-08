const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const tasks = require('./routes/tasks');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// Middleware
app.use(express.static('./public'));  // Serve static files in public folder
app.use(express.json());

// app.get('/', (req, res) => {
//     res.status(200).send('Task Manager App');
// });

app.use('/api/v1/tasks', tasks);
//-- For non-existing routes
app.use(notFound);
//-- Custom error handler (Schema requirements in ./models/Tasks.js)
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async() => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`\nServer is listening on port ${port}...`));
  } catch(error) {
    console.log('\nERROR connecting to the DB:\n', error);
  }
}

start();
