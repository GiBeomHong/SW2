/**
 * Created by GiBeomHong on 2016. 11. 2..
 */
var User = require("../Model/User").UserModel;
var mdd = require("../Model/Model").Model;
var mongoose = require("mongoose");
var async = require( 'async' );




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
    //var name = req.body.name;
    var woman_name = ['설현','레이첼 맥아담스', '아이린','현아','다현','태연','수지','하니'];
    var man_name = ['박보검','공유','Leonardo Dicaprio', '마동석','이제훈','송중기','이민호','Seon Opry'];
    // console.log("id is " + id + "gender is " + gender + "name is " + name);


    // mdd.remove({});

    async.waterfall([
            function(callback){
                mdd.remove({}, function(err) {
                        if (err) {
                            console.log(err)
                        } else {
                            callback( null, {
                                success : true
                            });
                        }
                    }
                );
            },
            function(resultA,callback){
                var cnt =0;
                for(var i=1; i<9; i++){
                    var model = new mdd.md();
                    model.num = i;
                    model.gender = "woman";
                    model.name = woman_name[i-1];
                    model.cnt = Math.floor(Math.random() * 1000) + 1;
                    // model.save();
                    model.save(function (err) {
                        cnt++;
                        if (err) console.log(err);
                        if (cnt == 16) {
                            callback( null, {
                                success : true
                            });
                        }
                    });
                }

                for(var i=1; i<9; i++){
                    var model = new mdd.md();
                    model.num = i;
                    model.gender = "man";
                    model.name = man_name[i-1];
                    model.cnt = Math.floor(Math.random() * 1000) + 1;
                    // model.save();
                    model.save(function (err) {
                        cnt++;
                        if (err) console.log(err);
                        if (cnt == 16) {
                            callback( null, {
                                success : true
                            });
                        }
                    });
                }
            }
        ],
        function(err,resultC){
            if(err) errorHandler(err);
            res.redirect('/');
        }
    );









    //Model.md(req.body.id,req.body.gender,function(err){
    //    if(err)
    //    throw err;

    //})
}
