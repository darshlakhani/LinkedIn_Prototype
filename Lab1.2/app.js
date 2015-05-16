var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var home = require('./routes/signup');
//var ses = require('./routes/csession');
var signin = require('./routes/signin');
var profiledet = require('./routes/profile');
var search = require('./routes/search');
var userprof = require('./routes/viewuser');
var conn = require('./routes/uconnections');
var logout = require('./routes/logout');

var cses = require('client-sessions');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.set('port', process.env.PORT || 3000);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(session({secret:'dhdthjrt243saw'}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(cses({
cookieName:"session",
secret:"rnsgf242dncud",
cookie:{ephemeral:false}
}));


app.get('/', routes.index);
app.get('/profile', routes.profile);
app.get('/signup2', home.signup2);
app.get('/search', search.searchpage);
app.get('/logout', logout.logout);
app.post('/signin', signin.signin);

//app.use('/users', users);
//app.use('/signup', signup);
app.post('/signup', home.createProfile);
app.post('/ulogin', signin.ulogin);
app.post('/signup2', home.signupextra);
app.get('/profiledet', profiledet.profdet);
app.get('/profilename', profiledet.profilename);
app.post('/updateprof', profiledet.updateprof);
app.post('/search', search.searchresult);
app.get('/viewuser', userprof.viewuprofile);
app.post('/getuserview', userprof.userprofdet);
app.post('/sendrequest', userprof.sendrequest);
app.get('/showconnections', conn.viewconnections);
app.get('/showcconnections', conn.viewcconnections);
app.post('/connectdet1', conn.connectdet1);
app.post('/connectdet2', conn.connectdet2);
app.post('/updateconnect', conn.updateconnect);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});




http.createServer(app).listen(app.get('port'), function(){
	  console.log('Express server listening on port ' + app.get('port'));
	});

