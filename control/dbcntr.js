/**
 * Created by GiBeomHong on 2016. 11. 2..
 */
var User = require("../Model/User").UserModel;
var mdd = require("../Model/Model").Model;
var mongoose = require("mongoose");




exports.man_vote = function (req,res,callback){


    var id = req.body.id;
    var gender = "woman"

    mdd
        .find({num:id,gender:gender})
        .exec(function(err,model){
            model[0].cnt++;
            console.log(model[0].toString());
            model[0].save(err);
            res.redirect('/man');
        })

}

exports.woman_vote = function (req,res,callback){

    var id = req.body.id;
    var gender = "man"

    mdd
        .find({num:id,gender:gender})
        .exec(function(err,model){
            model[0].cnt++;
            console.log(model[0].toString());
            model[0].save(err);
            res.redirect('/woman');
        })

}


exports.enroll = function (req,res,callback){



    var id = req.body.id;
    var gender = req.body.gender;
    var name = req.body.name;

    console.log("id is " + id + "gender is " + gender + "name is " + name);

    var model = new mdd.md();
    model.num = id;
    model.gender = gender;
    model.name = name;
    //model.save();
    model.save(function(err){
        if(err) console.log(err);
        res.redirect('/enrollpage');
    });



    //Model.md(req.body.id,req.body.gender,function(err){
    //    if(err)
    //    throw err;

    //})
}
