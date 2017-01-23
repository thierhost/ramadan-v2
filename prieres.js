'use strict';
var mongoose = require('mongoose');

var PriereSchema = mongoose.Schema({
    Date: String,
    Sobh: String,
    Chorouq: String,
    Dohr : String,
    Asr : String,
    Maghreb: String,
    Rakas : String,
    Sourates : String

});

module.exports = mongoose.model('Priere', PriereSchema);