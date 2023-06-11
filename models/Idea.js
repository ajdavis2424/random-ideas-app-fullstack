//Bring in mongoose
mongoose = require('mongoose');

//Create SChema & fields -- id created automatically
const IdeaSchema = new mongoose.Schema({
  text: {
    type: 'String',
    required: [true, 'Please add a text field'],
  },
  tag: {
    type: 'String',
  },
  username: {
    type: 'String',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Idea', IdeaSchema); //pass in name of model & schema created
