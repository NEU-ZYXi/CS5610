var mongoose = require('mongoose');
var pageSchema = require('../page/page.schema.server');

var websiteSchema = mongoose.Schema({
  developerId: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
  name: String,
  description: String,
  pages: [pageSchema],
  dateCreated: {type: Date, default: Date.now()}
}, {collection: "websites"});

module.exports = websiteSchema;
