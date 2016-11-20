/**
 * Created by GiBeomHong on 2016. 10. 12..
 */

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var UserModel = require("./User").UserModel;

var ModelSchema = new Schema({

    name: String,
    num : String,
    gender : String,
    //likemember : {type : Schema.Types.ObjectId, ref : "User", required : true},
    cnt : Number
});

ModelSchema.statics.md = function(){
    var md = new Model();

    md.name = null;
    md.num = null;
    md.gender = null;
    //md.likememeber = null;
    md.cnt = 0;

    return md;
}

var Model = mongoose.model("Model", ModelSchema);
exports.Model = Model;