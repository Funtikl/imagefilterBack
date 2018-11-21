const express = require('express');
const app = express();
var cors = require('cors');
const fs = require('fs');
const multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/Users/fuad/Code/webstagram/webstagram/src/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '.jpeg')
  }
})

var upload = multer({ storage: storage })



const corsm = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
};


app.post('/upload',corsm, upload.single('image') ,function(req, res){
    console.log(req.file)
})

app.listen(2000, function(){
  console.log('Ready!');
})
