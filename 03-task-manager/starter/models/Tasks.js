const mongoose = require('mongoose');

//-- Schema sets up structure (data/type) for all the documents in the collection
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Must provide a name'],
    trim: true,     // Remove white spaces
    maxlength: [20, 'Name cannot be more than 20 characters'],
  },
  completed: {
    type: Boolean,
    default: false,
  }
});

//-- Model wrapper provides an interface to the DB (for crud operations)
module.exports = mongoose.model('Task', TaskSchema);