var express 	= 	require('express'),
	bodyParser	=	require('body-parser'),
	app 		= 	express();
	
app.use(bodyParser.urlencoded({	extended: true }));
app.use(bodyParser.json());

app.use('/fonts', express.static(__dirname + '/fonts'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/templates', express.static(__dirname + '/templates'));


app.all('/*', function(req, res, next) {
    res.sendFile('index.html', { root: __dirname });
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log("Listening on port " + port);
});