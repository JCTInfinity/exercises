var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
	//_id: Schema.Types.ObjectId,
	sender: String,
	recipients: [String],
	cc: [String],
	text: String,
	mid: String,
	fpath: String,
	bcc: [String],
	to: [String],
	replyto: [String],
	ctype: String,
	fname: String,
	date: Date,
	subject: String
})
//schema.methods.sender = function () {this.sender;}
mongoose.connect('mongodb://localhost/enron')

var Email = mongoose.model('emails', schema);
module.exports = Email
