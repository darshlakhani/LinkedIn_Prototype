var myconnect = require('./mysql.js');
var ejs = require('ejs');


function viewuprofile(req,res)
{
	if(req.session.username)
		{
	ejs.renderFile('./views/viewuser.ejs',function(err, result) {
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
		{
		 res.redirect('/');
		 
		}
}

function userprofdet(req,res)
 {
	var result1 = {};
	var uq= "select a.f_name, a.l_name, a.username, b.summary, b.education, b.experience, c.status1 from personal_info a left join connections c on c.user2=a.username or c.user1=a.username , profile_info b where b.pid=a.pid and a.username='"+req.param('username')+"'";

	myconnect.querycon(function(err,result){
		if(err)
			{
			 console.log(err);
			}
		else
			{
			 if(result.length>0)
				 {
				 result1.results = result;
				  result1.fname = req.session.fname;
				  result1.lname = req.session.lname;
				 
				 res.send(result1);
				 }
			 else
				 {
				 res.send({"profile":"Error"});
				 }
			}
		
		
	},uq);
 }

function sendrequest(req,res)
{
  var srch = "select status1 from connections where user1='"+req.session.username+"' and user2='"+req.param('username')+"'";  
  myconnect.querycon(function(err,result1){
	  if(err)
		  {
		   console.log(err);
		  }
	  else
		  {
		    if(result1.length>0)
		    	{
		    	  res.send({"connectre":"Invited"});
		    	}
		    else
		    	{
		    	var srq = "insert into connections (user1, user2, status1) values ('"+req.session.username+"', '"+req.param('username')+"', 'Invited')";	
		    	  console.log(srq);
		    	  myconnect.postData(function(err,result){
		    		  if(err)
		    			  {
		    			   console.log(err);
		    			  
		    			  }
		    		  else
		    			  {
		    			  console.log("Invite Success"); 
		    			  res.send({"connectre":"Success"});
		    			  
		    			  }
		    		  
		    		  
		    		  
		    	  },srq);// end of postData

		    	} //end of result else
		  
		  }// end err else
	  
  },srch);//end of querycon
	
	  
}//end of function sendreq

exports.viewuprofile=viewuprofile;
exports.userprofdet=userprofdet;
exports.sendrequest=sendrequest;