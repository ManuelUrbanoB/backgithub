var express = require('express');
var request = require('request');

var router = express.Router();


router.get('/search/:name/:language/:page/:per_page', function(req, res, next) {
    var name = req.params.name;
    var language = req.params.language;
    var page = req.params.page;
    var per_page = req.params.per_page;
    var url = 'https://api.github.com/search/repositories?q='+name+'+language:'+language+'&sort=stars&order=desc?page='+page+'&per_page='+ per_page;
    var options = {
        url: url,
        headers: {
            'User-Agent':'' 
        }
    };

    function callback(error, response, body) {
        res.status(response.statusCode).send(JSON.parse(body))
    }
    
    request(options, callback);
});

router.get('/myrepos/:name/:page/:per_page', function(req,res,next){
    var name = req.params.name;
    var page = req.params.page;
    var per_page = req.params.per_page;
    console.log(req.params);
    var url = 'https://api.github.com/users/'+name+'/repos?page='+page+'&per_page='+per_page
    var options = {
        url: url,
        headers: {
            'User-Agent':'' 
        }
    };
    console.log(url);
    function callback(error, response, body) {
        res.status(response.statusCode).send(JSON.parse(body))
    }
    
    request(options, callback);
});
  

module.exports = router;