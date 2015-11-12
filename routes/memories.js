var express = require('express');
var router = express.Router();
var pg = require('pg');
var conString = process.env.DATABASE_URL;

router.get('/', function(req, res, next) {

});

module.exports = router;
