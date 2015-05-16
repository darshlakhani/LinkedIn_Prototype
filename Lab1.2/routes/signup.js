var myconnect = require('./mysql.js');
var ejs = require('ejs');
var crypto = require('crypto');




function createProfile(req,res)
{
 console.log("signup entered"); 
 var uchkqr = "select username from personal_info where username='"+req.param('username')+"'";	
  console.log(uchkqr);
 myconnect.querycon(function(err,resultu){
    if(err)
    	{
    	  console.log(err);
    	  res.send({"signup":"Fail"});
    	}
    else
    	{
    	  if(resultu.length>0)
    		  {
    		  console.log("Another Username"); 
    		  res.send({"signup":"Try other username"});
    		  }
    	  else
    		  {
    		  console.log("start");
	var mpid ; var l;
	var pidq="select pid from personal_info";
	console.log(pidq);
	myconnect.querycon(function(err,result){
		if(err)
			{
			console.log(err);
			res.send({"signup":"Fail"});
			}
		else
			{
			 if(result.length>0)
				 {
				//console.log(result.maxip);
				 //console.log(result);
				 l=result.length - 1;
				 mpid = result[l].pid ;
				 	if(mpid== null)mpid = 0;
				 }
			 else 
				 {
				  mpid = 0;
				 }
			 mpid++;
			 var shapass;
			 //function shapass1(key){shapass=key} ; 
			 var salt = crypto.randomBytes(64).toString('base64');
			 var repa = req.param('password') ;
			shapass = crypto.pbkdf2Sync(repa, salt, 10000, 128,'sha256').toString('base64');
			
			 req.session.intrchk = shapass ;
			  req.session.intp = mpid ;
			 console.log(shapass);
			 
				var quer = "insert into personal_info (pid,f_name,l_name,username,passw,email,passw1) values ("+mpid+",'"+req.param('fname')+"','"+req.param('lname')+"','"+req.param('username') +"','"+shapass +"','"+req.param('email')+"','"+salt+"')";
			  console.log(mpid);
			  console.log(req.param('fname')+","+req.param('lname')+","+req.param('username') +","+req.param('password') +","+req.param('email'));
				myconnect.postData(function(err,result){
					if(err)
						{
						console.log("postdataerror:"+err);
						res.send({"signup":"Fail"});
						}
					else
						{
						 var profq="insert into profile_info (pid) values ('"+req.session.intp+"')";
						 myconnect.postData(function(err,resultpr){
							 if(err)
								 {
								 console.log(err);
								 }
							 else
							  {
								 console.log("profile inserted");
							  }
						 },profq);
						
						req.session.username = req.param('username');
						 req.session.check = req.session.intrchk;
						 req.session.prof = req.session.intp;
						 res.send({"signup":"Success"});
						}
					
				},quer);
			}
		
	},pidq);
    		  }
    	  
    	}//end of uchk else
 },uchkqr);
}

function signup2 (req, res, next) {
	console.log('check');
	if(req.session.username)
		{
	ejs.renderFile('./views/signup2.ejs',function(err, result) {
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
		}
	else
		{res.redirect('/');}
}

function signupextra(req, res)
{
	var mpid = req.session.check ; 
	var qu = "update personal_info set country='"+req.param('country')+"', zip='"+req.param('zip')+"', birthday='"+req.param('bithday')+"', contact='"+req.param('contact')+"', marital_status='"+req.param('marital')+"' where username='"+req.session.username+"' and passw='"+req.session.check+"'";
	console.log(qu);
	myconnect.postData(function(err,result){
		if(err)
			{
			console.log("updateerror:"+err);
			res.send({"signup":"Fail"});
			}
		else
			{
			// req.session.username = req.param('username');
			 //req.session.check = shapass;
			 res.send({"signup2":"Success"});
			}
		
	},qu);
}


exports.signup2=signup2;
exports.createProfile=createProfile ;
exports.signupextra=signupextra ;