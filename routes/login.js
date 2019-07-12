var express = require('express');
var router = express.Router();

let mongoclient=require('mongodb').MongoClient
/* GET home page. */
router.post('/', function(req, res, next) {

    let username=req.body.username;
    let password=req.body.password;

    console.log(username);

    let url='mongodb://localhost:27017'
    mongoclient.connect(url,function(err,client){
        if(err){
            console.log('database connection errorr' +err);
        }
        else{
            let mydb=client.db('mysample');
            mydb.collection('person').findOne({username:username,password:password},function(err,result){
                if(err){
                    console.log('error')
                }else{
                    if(result){
                        console.log('login successfully')
                    }else{
                        console.log('login failed')
                    }
                }
            })
        }
    })

});
module.exports = router;
