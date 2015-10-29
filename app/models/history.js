var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var HistorySchema = new Schema({
  version: { type: String, default: '', trim: true },
  build_num: { type: String, default: '', trim: true },
  build_type: { type: String, enum: ['development', 'adhoc', 'inhouse'] },
  description: { type: String, default: '', trim: true },
  application: { type: Schmema.ObjectId, ref: 'Application' }
});
