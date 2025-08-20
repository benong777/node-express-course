const mongoose = require('mongoose');

//-- Schema sets up structure (data/type) for all the documents in the collection
const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

//-- Model wrapper provides an interface to the DB (for crud operations)
module.exports = mongoose.model('Task', TaskSchema);