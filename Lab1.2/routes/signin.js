var myconnect = require('./mysql.js');
//var ejs = require('ejs');
var crypto = require('crypto');


//var express = require('express');
//var router = express.Router();

/* GET home page. */
//router.get('/', );

exports.signin = function(req, res, next) {
	console.log('check');
	ejs.renderFile('./views/signin.ejs',function(err, result) {
		   // render on success
		   if (!err) {
		            res.end(result);
		   }
		   // render or error
		   else {
		            res.end('An error occurred');
		            console.log(err);
		   }
	   });
};





function ulogin(req,res)
{
  var q1 = "select * from personal_info where username='"+req.param('username')+"'";
  
  myconnect.querycon(function(err,result){
	   if(err)
		  {
		   res.send({'signin':'Fail'});
		  }
	   else
		   {
		     	if(result.length>0)
		     		{
		     		  var salt = result[0].passw1;
		     		 console.log("salt:"+salt);
		     		 //var salt = crypto.randomBytes(128).toString('base64');
					 var shapass;
		     		  var repa = req.param('password') ;
					shapass = crypto.pbkdf2Sync(repa, salt, 10000, 128,'sha256').toString('base64');
					
					 
					 
		     		  var q2 = "select * from personal_info where username='"+req.param('username')+"' and passw ='"+shapass+"'";
		     		console.log(q2);
		     		  myconnect.querycon(function(err,result1){
		     			 if(err)
		     				 {
		     				 console.log(err) 
		     				 res.send({'signin':'Fail'});
		     				  
		     				 
		     				 }
		     			 else
		     				 {
		     				   if(result1.length>0)
		     					   {
		     					    req.session.username=result1[0].username;
		     					    req.session.fname= result1[0].f_name;
		     					   req.session.lname= result1[0].l_name;
		     					    req.session.check= result1[0].passw;
		     					    req.session.prof=result[0].pid;
		     					    console.log(req.session.fname+"What");
		     					    console.log(req.session.check);
		     					   res.send({'signin':'Success'});
		     					   }
		     				   else
		     					   {
		     					   res.send({'signin':'Fail1'});
		     					   }
		     				 }
		     		},q2);
		     		
		     		}
		     	else
		     		{
		     		console.log("error user");  
		     		res.send({'signin':"Fail"});
		     		}
		   
		   }
	  
  },q1);

}

exports.ulogin = ulogin;
