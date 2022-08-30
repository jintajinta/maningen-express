var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  knex("test")
          .insert({name: 'aaa'})
          .then(function () {
            res.render('index', { title: 'Express' });
          })
});

module.exports = router;
