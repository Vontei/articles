var express = require('express');
var router = express.Router();
var unirest = require('unirest');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.post('/', function(req,res,next){
  var query = req.body.search;
  var req = unirest.get('http://api.nytimes.com/svc/search/v2/articlesearch.json?q='+ query +'&api-key=' + '9fed8617bb3db63df0527f89463b67ef:15:72435478')
  .end(function(response){
    var x = response.body.response.docs;
    res.render('index', { title: 'Express', res: x});
  })
})




module.exports = router;
