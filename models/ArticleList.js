var mongoose=require('mongoose');

var ArticleListSchema=new mongoose.Schema({
    'videoid':String,    
    'time':String,
    'watch':Number,
    'vote':Number,
})
module.exports=mongoose.model("ArticleList",ArticleListSchema,'ArticleList');
