var mongoose = require('mongoose');
var websiteSchema = require('../website/website.schema.server');

var userSchema = mongoose.Schema({
  facebook: {
    id: String,
    token: String
  },
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  websites: [websiteSchema],
  dateCreated: {type: Date, default: Date.now()}
}, {collection: 'users'});

module.exports = userSchema;
