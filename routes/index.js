
var express = require('express');
var router = express.Router();

var knex = require('knex')({
  client: 'pg',
  connection: 'postgres://localhost/sandyclean'
});

router.get('/', function(req,res,next){
  res.redirect('/index.html')
})

module.exports = router;
