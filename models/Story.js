const mongoose = require('mongoose');
const User = require('./User');
const Schema = mongoose.Schema;
const StorySchema = new Schema({
  title: { type: String, required: true, trim: true },
  body: { type: String, required: true },
  status: { type: String, default: 'public', enum: ['public', 'private'] },
  user: { type: mongoose.Types.ObjectId, ref: 'User' },

  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Story', StorySchema);
