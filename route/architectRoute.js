var express = require("express");
var Architect = require("../model/architect");
var architectRoute = express.Router();

architectRoute.route("/")
.get(function(req, res){
	Architect.find({}, function(err, data){
		if(err){
			res.status(500).send(err);
		}
		res.send(data);
	})
})
.post(function(req, res){
	var newArchitect = Architect(req.body)
	newArchitect.save(newArchitect, function(err, data){
		if(err){
			res.status(500).send(err);
		}
		res.send(data);
	})
})
architectRoute.route("/:id")
.get(function(req, res){
	Architect.findById(req.params.id, function(err, data){
		if(err){
			res.status(500).send(err);
		}
		res.send(data)
	})
})
.delete(function(req, res){
	Architect.findByIdAndRemove(req.params.id, function(err){
		if(err){
			res.status(500).send(err)
		}
		res.send({
			message: "your item was successfully delete"
		})
	})
})
.put(function(req, res){
	Architect.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, data){
		if(err){
			res.status(500).send(err)
		}
		res.send(data)
	})
})
module.exports = architectRoute;
