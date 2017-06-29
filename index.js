require('node-rest-client');
var fs = require('fs');
var request = require('request');

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
    //  console.log(data);
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

  getImage = function() {
    var lastImageUrl;
    var args = {
      data: {
        "name": "camera.listFiles",
        "parameters": {
          "fileType": "image",
          "entryCount": 1,
          "maxThumbSize": 0
        }
      },
      headers: {"Content-Type": "application/json"}
    }
    client.post("http://192.168.1.1/osc/commands/execute", args, function (data, response) {
     lastImageUrl = data.results.entries[0].fileUrl;
       var download = function(uri, filename, callback){
    request.head(uri, function(err, res, body){
     console.log('content-type:', res.headers['content-type']);
     console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

  // this downloads the last file on my camera only. It's just to test the download function
  // you'll need to parse the last file taken from the camera. 
  // I'll probably grab the file URI from the state

    console.log(lastImageUrl);
    // download('http://192.168.1.1/files/744a605553442020024b0202cb00f201/100RICOH/R0012006.JPG', '360_images/lastFile.jpg', function(){
    download(lastImageUrl, '360_images/lastFile.jpg', function(){

    });
  });
  }
