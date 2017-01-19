/**
 * Created by macbookpro on 06/01/2017.
 */
'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var _ = require('lodash');
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

var mongoose = require('mongoose');
mongoose.connect('mongodb://ramadan:ramadan@ds117899.mlab.com:17899/ramadan',{ config: { autoIndex: false } });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var Prieres = require('./prieres');






// prieres

app.get('/prieres',function (req,res) {
    Prieres.find(function (err,prieres) {
        if(err) {
            res.json({'not-found':404});
        } else{
            res.json({'posts':prieres});
        }
    })

    });
var port = process.env.PORT || 8080;


var server = app.listen(port, function () {
    console.log('Server running at http://127.0.0.1:'+port);
});