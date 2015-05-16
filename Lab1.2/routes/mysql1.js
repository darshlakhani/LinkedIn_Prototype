var mysql = require("mysql");
var ejs = require("ejs");
//var HashMap = require('hashmap').HashMap;

/*var pool = mysql.createConnection({
	
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'lab1'
	
}); */

var poolc = mysql.createConnection({
	
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'lab1'
	
});

//var poolobj = {poolco: poolc, used : false};
var poolarr = [];
for (var i =0 ; i< 50 ; i++)
{
	poolarr[i]= mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : '',
		database : 'lab1'
		
	});
	
}
/*var v = [];
var map =  new HashMap();

map.put('true', iset);
map.set('false',v);
*/
var trueset = [];
for (var i=0; i<50; i++)
	{
	  trueset[i]=i;
	}

function querycon (callback,sqlQuery)
{

	if(trueset.length>0)
		{
	var v1= trueset.pop();
	console.log(v1);
	
	
		poolarr[v1].query(sqlQuery,function(err,rows){
	  if(err)
		  {
		    console.log(err);
		  
		  }
	  else 
		{	// return err or result
			console.log("DB Results:"+rows);
			callback(err, rows);
		}
		
     });// end of .query
	//connection.release();
	trueset.push(v1);
	

		}//end of if
	
}// end of queycon

function postData(callback,sqlQuery){

	if(trueset.length>0)
		{
	var v1= trueset.pop();
	console.log(v1);
	
		poolarr[v1].query(sqlQuery,function(err,rows){
		if(err)
			{
			 console.log(err);
			
			}
		else
		{
			//var result = {"result":"Success"};
			callback(err);
		}
	});
		//connection.release();
		trueset.push(v1);
	//end of getconnection
		}//end of if
}

exports.querycon = querycon ;
exports.postData = postData ;