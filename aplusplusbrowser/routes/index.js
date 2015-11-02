var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' });
});

/* GET Userlist page. */
router.get('/elements', function(req, res) {
    var db = req.db;
    var collection = db.get('Elements');
    collection.find({},{},function(e,docs){
        res.render('elements', {
            "elements" : docs
        });
    });
});