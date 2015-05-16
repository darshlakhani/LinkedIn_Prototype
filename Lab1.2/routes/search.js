var myconnect = require('./mysql.js');
var ejs = require('ejs');


function searchpage(req,res, next){
	//console.log(req.param('email'));
	if(req.session.username)
		{
	ejs.renderFile('./views/search.ejs',function(err, result) {
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


function searchresult(req,res)
{
	var result1 = {};
  var qrs = "select f_name, l_name, username from personal_info where f_name='"+req.param('fname')+"' or l_name='"+req.param('lname')+"'";
   console.log(req.param('fname'));
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
		    	 res.send({"Search":"No Result"});
		    	}
		   }
	   
	   
   },qrs);

}

exports.searchpage=searchpage;
exports.searchresult=searchresult;