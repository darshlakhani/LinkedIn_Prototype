var myconnect = require('./mysql.js');
var ejs = require('ejs');


function profdet(req,res)
{
	var qp = "select a.f_name, a.l_name, b.summary, b.experience, b.skills, b.education from profile_info b, personal_info a where a.pid=b.pid and b.pid ='"+req.session.prof+"'";
	//var qp = "select * from profile_info where pid ='1'";
	console.log(qp);
	myconnect.querycon(function(err,result){
			if(err)
				{
				  console.log(err);
				//res.send(err);
				
				}
			else
				{
				  if(result.length>0)
					  {
					   console.log("got result");  
					  res.send(result);
					  
					  }
				  else
					  {
					   console.log("Error in getting profile data");
					    res.send({'Error':'Could not fetch'});
					  
					  }
				
				}

	  },qp);


}

function profilename(req,res)
{
	var qp1 = "select f_name, l_name from personal_info where pid ='"+req.session.prof+"'";
	//var qp = "select * from profile_info where pid ='1'";
	console.log(qp);
	myconnect.querycon(function(err,result){
			if(err)
				{
				  console.log(err);
				//res.send(err);
				
				}
			else
				{
				  if(result.length>0)
					  {
					   console.log("got result");  
					  res.send(result);
					  
					  }
				  else
					  {
					   console.log("Error in getting profile data");
					    res.send({'Error':'Could not fetch'});
					  
					  }
				
				}

	  },qp1);


}


function updateprof(req,res)
{
  var type = req.param("type");
  var qup = "update profile_info set "+type+"='"+req.param('detail')+"' where pid='"+req.session.prof+"'";
 // var qup = "update profile_info set "+type+"='"+req.param('detail')+"' where pid='1'";
  console.log(qup);
  myconnect.postData(function(err,result){
	 if(err)
		 {
		   console.log(err);
		   res.send(err);
		 }
	 else
		 {
		   res.send({"update":"Success"});
		 
		 }
  },qup);
  


}


exports.profdet=profdet ;
exports.profilename=profilename ;
exports.updateprof=updateprof;