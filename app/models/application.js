var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ApplicationSchema = new Schema({
  title: { type: String, default: '', trim: true },
  identifier: { type: String, default: '', trim: true },
  platform: { type: String, enum: ['ios', 'android'] }
});
