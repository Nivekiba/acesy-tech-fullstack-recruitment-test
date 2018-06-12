var express = require("express")
var ParseServer = require('parse-server').ParseServer

var app = express()
var api = new ParseServer({
  databaseURI: 'mongodb://localhost:27017/notesdb',
  appId: 'myAppId',
  fileKey: 'myFileKey',
  masterKey: 'mySecretMasterKey'
});

app.use("/parse",api)
var port = 1337

app.listen(port, function(){
    console.log("ParseServer running on port ",port)
})