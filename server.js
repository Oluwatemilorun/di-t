// GRAB THE PACKAGES/VARIABLES WE NEED
// ==================================================
var express = require('express');
var app     = express();
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	console.log("Heyyyyy");
    res.render('public/construction.html');
    

});

// START THE SERVER
// ==================================================

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
  console.log('#Digiskills is running on port', app.get('port'));
});