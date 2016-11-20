/**
 * Created by GiBeomHong on 2016. 10. 12..
 */
var mdd = require("../Model/Model").Model;


exports.mainpage=function (req,res,callback){

    res.render("../views/index.html");
}

exports.man=function (req,res,callback){
    var gender = "woman";
    mdd.find({gender:gender},function(err,model){
        res.render("../views/man.html",{model:model});
    })

    // console.log("ip is "+require('my-local-ip')());

}

exports.woman=function (req,res,callback){
    var gender = "man";
    mdd.find({gender:gender},function(err,model){
        res.render("../views/woman.html",{model:model});
    })
}


//DB 초기화
exports.enrollpage=function (req,res,callback){
    res.render("../views/enroll.html");
}