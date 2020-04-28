var mongoose = require('mongoose');
const dbConnectObj = require('./db-connect');

function getData(req, res) {
  dbConnectObj.model.find((err, x)=>{
      if (err) return console.error(err);
      return x
  }).then((r)=>{

      res.send({data: r})
  })
}
function addData(req, res) {
  let username = req.body.username;
  let email = req.body.email;
  let newUser = new dbConnectObj.model({username,email});
  newUser.save(function (err, nu) {
    if (err) return console.error(err);
    console.error("saved", nu);
    res.send({success: true})
  });
}
module.exports.getData = getData;
module.exports.addData = addData;