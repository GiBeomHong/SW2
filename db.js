/**
 * Created by GiBeomHong on 2016. 10. 12..
 */

var dbOptions = {
    db : {
        native_parser : true
    },
    server : {
        poolSize : 5,
        socketOptions : {
            keepAlive : 1
        }
    },
    // user : 'dba',
    // pass : 'writecode'
}, mongoose = require('mongoose'), dbUri = process.env.MONGODB_URI
    || 'mongodb://localhost:27017';
module.exports = mongoose;
module.exports.start = function(callback) {
    mongoose.connect(dbUri, dbOptions, function(err) {
        if (err) {
            console.log('mongoose connection error :' + err);
            throw err;
        } else {
            console.log('Connected to mongodb killer database.');
        }
        if (callback){callback();}
    });
};
