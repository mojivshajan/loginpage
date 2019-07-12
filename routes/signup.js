var express = require('express');
var router = express.Router();
let mongoclient=require('mongodb').MongoClient;
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('signup');
});
router.post('/',function (req,res) {
    let firstname=req.body.firstname
    let lastname=req.body.lastname
    let age=req.body.age
    let username=req.body.username
    let password=req.body.password
    let confirmpassword=req.body.confirmpassword
    let email=req.body.email

    console.log(firstname)

    let url="mongodb://localhost:27017";

    mongoclient.connect(url,function (err,client) {
        if(err)
        {
            console.log('database conection error')
        }
        else{
            let mydb=client.db('mysample')
            if(mydb){
                console.log('connected')
                mydb.collection('person').insertOne({firstname:firstname,lastname:lastname,age:age,username:username,password:password,confirmpassord:confirmpassword,email:email},function(err,data) {
                    if (err) {
                        console.log('error' + err)
                    } else {
                        console.log('successfully inserted' + client)
                        res.redirect('/')
                    }
                })
            }
        }

    })


});

module.exports = router;