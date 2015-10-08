var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ContactSchema   = new Schema({
    name: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: false
    },
    address: {
      type: String,
      required: false
    }
});

module.exports = mongoose.model('Contact', ContactSchema);
