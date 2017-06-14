var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var architectSchema = new Schema({
	firstName: String,
	living: Boolean,
	architectAmount: Number,
	type: String
});
var Architect = mongoose.model("ArchitectCollection", architectSchema);
module.exports = Architect;