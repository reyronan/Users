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
  console.log(req.body);
  
}
module.exports.getData = getData;
module.exports.addData = addData;