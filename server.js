var express = require("express");
var bodyParser = require("body-Parser");
var mongoose = require("mongoose");
var path = require("path")
mongoose.connect("mongodb://localhost/architect", function(err){
	if(err){
		console.log(err)
	}else{
		console.log("connected to database")
	}
});

var app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
var port = process.env.PORT || 8000;
app.use("/architect", require("./route/architectRoute"))

app.listen(port, function(){
	console.log(`listening on ${port}`)
})

