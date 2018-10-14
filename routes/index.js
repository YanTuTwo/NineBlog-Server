var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var marked = require('marked');
var fs = require('fs');
var ArticleList = require('../models/ArticleList')

//连接MongoDB数据库

mongoose.connect('mongodb://127.0.0.1:27017/nineblog');

mongoose.connection.on("connected", function () {
  console.log("MongoDB connected success.")
});

mongoose.connection.on("error", function () {
  console.log("MongoDB connected fail.")
});

mongoose.connection.on("disconnected", function () {
  console.log("MongoDB connected disconnected.")
});
/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('ddddd');
  res.render('index', {});
//   res.sendfile('../public/index.html'); 
});
//返回md文件接口
router.get('/getmd',function(req,res){
	fs.readFile('../NineBlog-Server/public/list/2.md', function (err, data) {
	   if (err) {
	       console.error(err);
	   		res.send('nofile')
	   }else {
	   		let str = marked(data.toString());
	   		res.json(str);
	   }
	   
	});
})
router.get('/detail', function(req, res){
    Users.find({articleid:1001},(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        if(data.length>0){
            res.json({
                data:data,
                msg:"成功"
            })
        }else{
            res.json({
                data:null,
                msg:"fail"
            })
        }
    })
});

module.exports = router;
