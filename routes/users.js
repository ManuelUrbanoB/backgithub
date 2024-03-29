var express = require('express');
var request = require('request');

var router = express.Router();

router.post('/login', function(req, res, next) {
    var username  = req.body.username;
    var password  = req.body.password;
    var options = {
    url: 'https://api.github.com',
    auth: {
        'user': username,
        'pass': password
    },
    headers: {
      'User-Agent':'' 
    }
  };

  function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
          res.status(200).send({success: true})
          return
      }else {
        res.status(response.statusCode).send({success: false, message: JSON.parse(body).message})
      }
  }
  request(options, callback);
});

module.exports = router;
