var myconnect = require('./mysql.js');
var ejs = require('ejs');

function logout (req,res)
{
  console.log("Logging Out");
	req.session.reset();
  console.log(req.session.username);
 res.send({"logout":"Yes"});

}

exports.logout=logout;