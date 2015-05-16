var myconnect = require('./mysql.js');
var ejs = require('ejs');


function viewconnections(req,res)
{
	
	if(req.session.username)
		{
	ejs.renderFile('./views/uconnections.ejs',function(err, result) {
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

function viewcconnections(req,res)
{
	if(req.session.username)
		{
	ejs.renderFile('./views/cconnections.ejs',function(err, result) {
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



function connectdet1 (req,res)
{
 var result1 = {};
	var cq1= "select c.user1, c.status1, a.f_name, a.l_name, a.username from connections c, personal_info a where  c.user2='"+req.session.username+"' and a.username=c.user1";
  //var cqu="select f_name, l_name, username from personal_info where username=("+cq1+")";
 console.log(cq1);
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
			   console.log("empty");
		  }
	  
  },cq1);
 

}

function connectdet2(req,res)
{
	var cq21 = "select user1 from connections where user2='"+req.session.username+"' and status1='Connected'";
    var cq22 = "select user2 from connections where user1='"+req.session.username+"' and status1='Connected'"; 
	var cq2 = "select f_name, l_name, username from personal_info where username=("+cq21+") or username=("+cq22+")";
var result1 = {};
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
			   result1.fname = req.session.fname;
			   result1.lname = req.session.lname;
			   res.send(result1);
			   }
		   }
	   
	   
   },cq2);

}

/*function connectdet3(req,res)
{
	var cq3 = "select * from connections where user1='"+req.session.username+"'";
}*/


function updateconnect(req,res){
	
	if(req.param("status")== 'Yes')
		{
		 var upq = "update connections set status1='Connected' where user1='"+req.param('uname')+"' and user2='"+req.session.username+"'";
		 
		 myconnect.postData(function(err,result){
			 
			 if(err)
			 {
				 console.log(err);
			 }
			 else
				 {
				  res.send({"update":"Success"});
				 }
		 },upq);
		}// end of yes if
	else if(req.param("status")=='No')
		{
		  var upq1="update connections set status1='Declined' where user1='"+req.param('uname')+"' and user2='"+req.session.username+"'";
		  myconnect.postData(function(err,result){
			  if(err)
				   {
				   console.log(err);
				   }
			  else
				  {
				   res.send({"update":"Success"});
				  }
			  
		  },upq1);
		}
}


exports.viewconnections=viewconnections;
exports.viewcconnections=viewcconnections;
exports.connectdet1=connectdet1;
exports.connectdet2=connectdet2;
exports.updateconnect=updateconnect;
