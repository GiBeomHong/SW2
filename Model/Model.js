/**
 * Created by GiBeomHong on 2016. 10. 12..
 */

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ModelSchema = new Schema({

    name: String,
    num : String,
    gender : String,
    cnt : Number
});


var Model = mongoose.model("Model", ModelSchema);
exports.Model = Model;