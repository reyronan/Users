var mongo = require('mongodb');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://greallra:pytdg!N8@ds213645.mlab.com:13645/test-ronan', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connected");
});

var users = new Schema({
    username: String,
    email: String
})
const model = mongoose.model('nameOfSchema', users)

console.log(model);

  
module.exports.model = model;