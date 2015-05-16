var myconnect = require('./mysql.js');
var ejs = require('ejs');




/*function connectdet1 (req,res)
{
  var cq1= "select user1 from connections where  user2='"+req.session.username+"'";
  var cqu="select f_name, l_name, username from personal_info where username=("+cq1+")";
 console.log(cqu);
  myconnect.querycon(function(err,result){
	  if(err)
		  {
		  console.log(err);
		  }
	  else
		  {
		  if(result.length>0) 
		  res.send(result);
		  else
			   console.log("empty");
		  }
	  
  },cqu);
 

} */

function connectdet2(req,res)
{
	var cq21 = "select user1 from connections where user2='"+req.session.username+"' and status1='Connected'";
    var cq22 = "select user2 from connections where user1='"+req.session.username+"' and status1='Connected'"; 
	var cq2 = "select f_name, l_name, username from personal_info where username=("+cq21+") or username=("+cq22+")";

   myconnect.querycon(function(err,result){
	   if(err)
		   {
		    console.log(err);
		   }
	   else
		   {
		    res.send(result);
		   }
	   
	   
   },cq2);

}

/*function connectdet3(req,res)
{
	var cq3 = "select * from connections where user1='"+req.session.username+"'";
}*/


exports.viewconnections=viewconnections;
//exports.connectdet1=connectdet1;
exports.connectdet2=connectdet2;

