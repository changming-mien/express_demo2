var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
	extended: false
})
app.use(express.static('public'));
app.get('/index', function(req, res) {
	res.sendFile(__dirname + "/views/" + "index.html");
})
app.post('/index', urlencodedParser, function(req, res) {
	// console.log(req.body.username)
	res.redirect("https://www.baidu.com/s?wd=" + req.body.username + "&rsv_spt=1&rsv_iqid=0xd53191cc00046da0&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=0")
})
app.listen(8081, function() {
	console.log('dfv')
})