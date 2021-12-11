const express=require('express')
const mongo=require('mongoose')
var bodyParser = require('body-parser')
const app=express()
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
mongo.connect('mongodb+srv://Enter your MongoDB connection string here', { useNewUrlParser: true, useUnifiedTopology: true, },)
.then((result)=>console.log("successful"))
.catch((err)=>console.log(err));
const Schema=mongo.Schema;
const UserSchema=new Schema({
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    
})
const User=mongo.model('User',UserSchema);
app.use(express.json());
app.use(express.urlencoded());
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.post('/signup',(req,res)=>{
    var user=new User(req.body)
    User.exists({Email:user.Email}, function (err, doc) {
        if (doc===null){
            user.save()
    .then((result)=>{console.log("user saved successfully")})
    .catch((err)=>{console.log(err);});
    res.send("User saved successfully");
        }else{
            console.log("Email already exists")
            res.send("Email already exists") // false
        }
    });
})

app.post('/login',(req,res)=>{
    var user=new User(req.body)
    User.exists({Email:user.Email,Password:user.Password}, function (err, doc) {
        if (doc===null){
            user.save()
    .then((result)=>{console.log("user saved successfully")})
    .catch((err)=>{console.log(err);});
    res.send("Incorrect");// false
        }else{
            console.log("Email already exists")
            res.send("Correct")
        }
    });
})


const path=require('path');
const request=require('request');
app.use(express.static(__dirname + '/styles'));
app.set('views',path.join(__dirname,"views"));

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.render('search')
})

app.post('/results',(req,res)=>{
    let query=req.body.search;
    console.log(query)
    request('https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=&app_key=&results_per_page=20&what='+query+'&content-type=application/json',(error,response,body)=>{
        if(error){
            console.log(error)
        }
        let data=JSON.parse(body);
        // console.log(data)
        res.render('results',{data:data,searchQuery:query})
    })
})

app.listen(4000,()=>{
    console.log("listening to the port number 4000")
})
