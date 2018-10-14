var express = require('express');
var router = express.Router();
var fs = require('fs');
var marked = require('marked');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('index');
//   res.sendfile('../public/index.html'); 
});
//
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

module.exports = router;
