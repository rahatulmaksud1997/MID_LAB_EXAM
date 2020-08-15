var express = require('express');
var router = express.Router();

var employee 	= require.main.require('./models/employee');
var log_in 	= require.main.require('./models/log_in');

router.get('/', function(req, res)
{
  if(req.session.type == 1)
  {
    res.render('adminDash/index');
  }
  else
  {
    res.redirect('/login');
  }
});

module.exports = router;
