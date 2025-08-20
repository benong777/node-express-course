const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const tasks = require('./routes/tasks');
require('dotenv').config();

// Middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Task Manager App');
});

app.use('/api/v1/tasks', tasks);

const port = 3000;

const start = async() => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`\nServer is listening on port ${port}...`));
  } catch(error) {
    console.log('\nERROR connecting to the DB:\n', error);
  }
}

start();
