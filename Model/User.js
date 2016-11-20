/**
 * Created by GiBeomHong on 2016. 10. 12..
 */

/**
 * Created by GiBeomHong on 2016. 5. 17..
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var UserSchema = new Schema({

    name : String,
    loc:{lat : String, lng : String},
    gender : String
});

UserSchema.statics.newuser = function(){
    var user = new UserModel();

    user.name = null;
    user.loc = null;
    user.gender = null;

    return user;
}

var UserModel = mongoose.model("User", UserSchema);
exports.UserModel = UserModel;
