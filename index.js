require('node-rest-client');

var thetaResponse = document.getElementById('thetaResponse');
thetaResponse.innerHTML = ("this is a test response");

var Client = require('node-rest-client').Client;

var client = new Client();

getInfo = function() {
    console.log("button clicked")
    client.get("http://192.168.1.1:80/osc/info", function (data, response) {
      console.log(data);
      // console.log(response);
    var thetaResponse = document.getElementById('thetaResponse');
    thetaResponse.innerHTML = JSON.stringify(data);
    });
  }