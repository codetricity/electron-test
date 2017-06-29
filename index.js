require('node-rest-client');

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

state = function() {
    var args = {
    data: { },
    headers: { "Content-Type": "application/json" }
};
    client.post("http://192.168.1.1:80/osc/state", args, function (data, response) {
      console.log(data);
    var thetaResponse = document.getElementById('thetaResponse');
    thetaResponse.innerHTML = JSON.stringify(data);
    });
  }

startSession = function() {
    var args = {
    data: { "name": "camera.startSession" },
    headers: { "Content-Type": "application/json" }
};
    client.post("http://192.168.1.1:80/osc/commands/execute", args, function (data, response) {
      console.log(data);
    var thetaResponse = document.getElementById('thetaResponse');
    thetaResponse.innerHTML = JSON.stringify(data);
    });
  }

takePicture = function() {
    var args = {
    data: { "name": "camera.takePicture"},
    headers: { "Content-Type": "application/json" }
};
    client.post("http://192.168.1.1:80/osc/commands/execute", args, function (data, response) {
      console.log(data);
    var thetaResponse = document.getElementById('thetaResponse');
    thetaResponse.innerHTML = JSON.stringify(data);
    });
  }

setApiV2 = function() {
    var args = {
    data: { "name": "camera.setOptions",
          "parameters":{
            "sessionId": "SID_0001",
            "options": {
              "clientVersion": 2
            }
          } 
        },
    headers: { "Content-Type": "application/json" }
};
    client.post("http://192.168.1.1:80/osc/commands/execute", args, function (data, response) {
      console.log(data);
    var thetaResponse = document.getElementById('thetaResponse');
    thetaResponse.innerHTML = JSON.stringify(data);
    });
  }