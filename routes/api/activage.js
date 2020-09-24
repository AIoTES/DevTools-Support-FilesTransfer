var router = require('express').Router();
const fs = require('fs');
const axios = require('axios');

// return a list of tags
router.post('/', function(req, res, next) {
  try {
    var body = req.body;
    let data = JSON.stringify(body);

    fs.writeFileSync('./public/api/activage/cache.json', data,(err) => {
      if (err) throw err;
      console.log('Data written to file');
    });

    res.json({ "message" : "file_written" , "data" : data});

  }catch (e) {
    res.status = 501;
    res.json({});
  }
});

router.get('/', function(req, res, next) {
  try {
    res.json({
      a: "b"
    });

  }catch (e) {
    res.status = 501;
    res.json({});
  }
});

router.post('/login', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;

  axios.post( process.env.KEY_CLOACK + "/security/auth",  `username=${username}&password=${password}`, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  }).then(response => {
      res.json(response.data);
  }, err => {
    console.log(err);
  });
});

router.post('/request', function(req, res, next) {
  console.log('Bike');
  axios.post( req.body.path,  req.body.data, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": req.body.auth
    }
  }).then(response => {
    res.json(response.data);
  }, err => {
    console.log(err);
  });
});

module.exports = router;
