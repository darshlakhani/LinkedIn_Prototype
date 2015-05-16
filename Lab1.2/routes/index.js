var express = require('express');
var router = express.Router();
var http = require('http');
/* GET home page. */
//router.get('/', );

exports.index = function(req, res, next) {
	if(!req.session.username)
		{
  res.render('index', { title: 'Express' });
		}
  else{
	  res.redirect('/profile');
      }
 };

exports.profile= function(req,res,next){
    
	if(req.session.username)
	{
	res.render('profile', {});
	}
	else
		{
		    
		res.redirect('/');
		
		/*var op = { method : 'GET', host: 'localhost', port:3000, path: '/'};
           http.request(op,function(res){
        	   res.on('data', function (chunk) {
        		    res.redirect(chunk);
        		  });
        	   
        	   
           }).end(); */
		
		}
};