'use strict';
var mongoose = require('mongoose');

var PriereSchema = mongoose.Schema({

    Date: Date,
    Sobh: String,
    Chorouq: String,
    Dohr : String,
    Asr : String,
    Maghreb: String

});

module.exports = mongoose.model('Priere', PriereSchema);